import * as firebase from 'firebase';
import dotenv from 'dotenv';

dotenv.config();

const {
  FIREBASE_APIKEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MSG_SENDER_ID
} = process.env;

// Initialize Firebase
const config = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: "bookstore-d06e6",
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MSG_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;