// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZjNMS6Biuk6zjkHR9JEmbBGknMGse3hc",
  authDomain: "lec21-d5f25.firebaseapp.com",
  projectId: "lec21-d5f25",
  storageBucket: "lec21-d5f25.firebasestorage.app",
  messagingSenderId: "905264014721",
  appId: "1:905264014721:web:b46f4acf36db5bd9d7f480",
  measurementId: "G-Y8YR4W9JR2"
};

// Initialize Firebase
const fire_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire_app);
export const db = getFirestore(fire_app)