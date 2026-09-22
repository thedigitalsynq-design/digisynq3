const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const db = new Database(path.join(__dirname, 'cinema.db'));

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('user','admin')),
      avatar TEXT DEFAULT '/images/default-avatar.png',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tmdb_id INTEGER UNIQUE NOT NULL,
      title TEXT NOT NULL,
      overview TEXT,
      poster_path TEXT,
      backdrop_path TEXT,
      release_date TEXT,
      vote_average REAL DEFAULT 0,
      vote_count INTEGER DEFAULT 0,
      genres TEXT,
      runtime INTEGER,
      director TEXT,
      cast_names TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admin_reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movie_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      rating REAL NOT NULL CHECK(rating >= 0 AND rating <= 10),
      review_text TEXT,
      pros TEXT,
      cons TEXT,
      verdict TEXT CHECK(verdict IN ('masterpiece','must-watch','good','average','skip')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      UNIQUE(movie_id, user_id)
    );

    CREATE TABLE IF NOT EXISTS discussions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movie_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      body TEXT,
      is_pinned INTEGER DEFAULT 0,
      is_spoiler INTEGER DEFAULT 0,
      reply_count INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      discussion_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      parent_id INTEGER,
      body TEXT NOT NULL,
      upvotes INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (discussion_id) REFERENCES discussions(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS comment_votes (
      user_id INTEGER NOT NULL,
      comment_id INTEGER NOT NULL,
      vote INTEGER NOT NULL CHECK(vote IN (1, -1)),
      PRIMARY KEY(user_id, comment_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(comment_id) REFERENCES comments(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS user_lists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      movie_id INTEGER NOT NULL,
      list_type TEXT CHECK(list_type IN ('watched','watchlist','favorite')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY(movie_id) REFERENCES movies(id) ON DELETE CASCADE,
      UNIQUE(user_id, movie_id, list_type)
    );

    CREATE INDEX IF NOT EXISTS idx_admin_reviews_movie ON admin_reviews(movie_id);
    CREATE INDEX IF NOT EXISTS idx_discussions_movie ON discussions(movie_id);
    CREATE INDEX IF NOT EXISTS idx_comments_discussion ON comments(discussion_id);
    CREATE INDEX IF NOT EXISTS idx_movies_tmdb_id ON movies(tmdb_id);
  `);

  // Statistics columns for scraped data (idempotent)
  for (const col of ['budget TEXT', 'box_office TEXT']) {
    try { db.exec(`ALTER TABLE movies ADD COLUMN ${col}`); } catch {}
  }

  const adminExists = db.prepare('SELECT id FROM users WHERE role = ?').get('admin');
  if (!adminExists) {
    const hash = bcrypt.hashSync('admin123', 10);
    db.prepare('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)').run(
      'admin', 'admin@cinephile.com', hash, 'admin'
    );
    console.log('Default admin created: admin / admin123');
  }
}

module.exports = { db, initDB };
