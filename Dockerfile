# DigiSynq Cinema Unified — production image (Node 22, native sqlite build)
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY --from=build /app/dist ./dist
COPY --from=build /app/index.html ./index.html
COPY server.js database.js tmdb.js ./
COPY server ./server
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
