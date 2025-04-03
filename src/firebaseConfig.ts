/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCnLaL578MrjbLE8UbEXnyp-fYBCDR5-I",
  authDomain: "noomi-gutters-reviews-74257.firebaseapp.com",
  projectId: "noomi-gutters-reviews-74257",
  storageBucket: "noomi-gutters-reviews-74257.firebasestorage.app",
  messagingSenderId: "736402550929",
  appId: "1:736402550929:web:bb9eb5cb8bd6dea9c40f30"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 * 
 */



// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 👈 add this

const firebaseConfig = {
  apiKey: "AIzaSyCCnLaL578MrjbLE8UbEXnyp-fYBCDR5-I",
  authDomain: "noomi-gutters-reviews-74257.firebaseapp.com",
  projectId: "noomi-gutters-reviews-74257",
  storageBucket: "noomi-gutters-reviews-74257.firebasestorage.app",
  messagingSenderId: "736402550929",
  appId: "1:736402550929:web:bb9eb5cb8bd6dea9c40f30",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app); // 👈 this is what you'll use to save reviews
