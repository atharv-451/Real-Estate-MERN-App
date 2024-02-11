// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estatenet.firebaseapp.com",
  projectId: "mern-estatenet",
  storageBucket: "mern-estatenet.appspot.com",
  messagingSenderId: "982874123512",
  appId: "1:982874123512:web:11aa21a382beac47261f0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);