import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const {
  VITE_KAKAOMAP_API_KEY,
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGE_SENDER_ID,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGE_SENDER_ID,
  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
