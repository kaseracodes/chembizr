// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0TLAKOU6tC08D2ZoIuBLzCe3AwRiQRuM",
  authDomain: "chembizr-5eabc.firebaseapp.com",
  projectId: "chembizr-5eabc",
  storageBucket: "chembizr-5eabc.appspot.com",
  messagingSenderId: "622136710677",
  appId: "1:622136710677:web:2343813a1c093af041a01c",
  measurementId: "G-H51W1RN3S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore()
const storage = getStorage()

export { app, auth, firestore, storage };