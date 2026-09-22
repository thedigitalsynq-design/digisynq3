import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import fallbackConfig from '../../firebase-applet-config.json';

const env = import.meta.env;
const firebaseConfig = {
  projectId: env.VITE_FIREBASE_PROJECT_ID || fallbackConfig.projectId,
  appId: env.VITE_FIREBASE_APP_ID || fallbackConfig.appId,
  apiKey: env.VITE_FIREBASE_API_KEY || fallbackConfig.apiKey,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || fallbackConfig.authDomain,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || fallbackConfig.storageBucket,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || fallbackConfig.messagingSenderId,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

const databaseId = fallbackConfig.firestoreDatabaseId && fallbackConfig.firestoreDatabaseId !== '(default)'
  ? fallbackConfig.firestoreDatabaseId
  : undefined;

export const db = databaseId ? getFirestore(app, databaseId) : getFirestore(app);

export default app;
