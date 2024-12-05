// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4sspjKKv68eQE9nd4kfla_R5_A9vEMsA",
  authDomain: "plinkogame-ec182.firebaseapp.com",
  projectId: "plinkogame-ec182",
  storageBucket: "plinkogame-ec182.firebasestorage.app",
  messagingSenderId: "277115233912",
  appId: "1:277115233912:web:59d52eae34ede325b1ef8d",
  measurementId: "G-3ETDZKR8SZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
