import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaTFZS22uwhqQkZcZobCeohUWDvfC_ETU",
  authDomain: "cosmosis-mission-control.firebaseapp.com",
  projectId: "cosmosis-mission-control",
  storageBucket: "cosmosis-mission-control.firebasestorage.app",
  messagingSenderId: "921017782990",
  appId: "1:921017782990:web:2cdb10ba73603b15c1b69f",
  measurementId: "G-20TP5FF9NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);