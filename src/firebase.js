// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeDKzY2eK2jTELHpNLaJkv-_3yoZQr4H8",
  authDomain: "tic-tak-2bd99.firebaseapp.com",
  projectId: "tic-tak-2bd99",
  storageBucket: "tic-tak-2bd99.firebasestorage.app",
  messagingSenderId: "1045174627190",
  appId: "1:1045174627190:web:6e3b01872f9ec9467ae857",
  measurementId: "G-X7TW5R26GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const db = getFirestore(app);
export const db=getDatabase(app);