// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqTwn5yr3rGN3awZ4GYrNm1pyJGqM-fnc",
  authDomain: "mytaskmanager-13ce8.firebaseapp.com",
  projectId: "mytaskmanager-13ce8",
  storageBucket: "mytaskmanager-13ce8.firebasestorage.app",
  messagingSenderId: "691109130073",
  appId: "1:691109130073:web:9340b76f2bad2781be2648",
  measurementId: "G-E3RJNSG220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };