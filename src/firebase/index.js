// src/firebase/index.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from 'quasar';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBcikhxaijDj9qJTb8s6U2R_3otokIdEQ",
  authDomain: "pk-education-cad58.firebaseapp.com",
  projectId: "pk-education-cad58",
  storageBucket: "pk-education-cad58.appspot.com",
  messagingSenderId: "465511909509",
  appId: "1:465511909509:web:20397f0118a473b1a301ec",
  measurementId: "G-GSQWJE60PJ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);
 export const storage = getStorage();
 export const rtdb = getDatabase(app); // Initialize the Realtime Database

// Firestore Configuration
export const firestore = db; // Export Firestore

// Auth State Change Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set('user', user);
  } else {
    LocalStorage.remove('user');
  }
});
