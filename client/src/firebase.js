// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-afd1b.firebaseapp.com",
  projectId: "mern-blog-afd1b",
  storageBucket: "mern-blog-afd1b.appspot.com",
  messagingSenderId: "864075576729",
  appId: "1:864075576729:web:f29d8965878aa35f1e0f08"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);