// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURXZcdLisocimmRqhqoLDIljPRiHLyuY",
  authDomain: "pahadicraft-5bd69.firebaseapp.com",
  projectId: "pahadicraft-5bd69",
  storageBucket: "pahadicraft-5bd69.firebasestorage.app",
  messagingSenderId: "1035162629616",
  appId: "1:1035162629616:web:4eb74015fd69d0d3189935",
  measurementId: "G-G1495XRBWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();