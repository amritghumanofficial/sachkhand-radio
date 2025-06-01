// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmR2Dpu1kWO_RNoc8Z8VLEdcYlx4zmkxQ",
  authDomain: "sachkhand-radio.firebaseapp.com",
  projectId: "sachkhand-radio",
  storageBucket: "sachkhand-radio.firebasestorage.app",
  messagingSenderId: "202787054032",
  appId: "1:202787054032:web:e1328d0d8a09e6ad0dd9d5",
  measurementId: "G-75FPS91869"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);