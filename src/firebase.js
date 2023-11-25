import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvHEeKzXa-OQog-nfo6HQc4uljSnzPkfo",
  authDomain: "chat-2-10f71.firebaseapp.com",
  projectId: "chat-2-10f71",
  storageBucket: "chat-2-10f71.appspot.com",
  messagingSenderId: "263759161362",
  appId: "1:263759161362:web:c869584cc3f4564d5110cb",
  measurementId: "G-42FN1FFRTH",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
