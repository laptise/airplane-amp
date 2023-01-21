// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbVzFQwFBj3t6hOlVsf0WUk8-IfqDHNbk",
  authDomain: "airplane-a8d48.firebaseapp.com",
  projectId: "airplane-a8d48",
  storageBucket: "airplane-a8d48.appspot.com",
  messagingSenderId: "737025425199",
  appId: "1:737025425199:web:9ba312fcda6b91cd3d6bda",
  measurementId: "G-ZG455W2NGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
