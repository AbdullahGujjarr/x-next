// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-9045b.firebaseapp.com",
  projectId: "x-next-9045b",
  storageBucket: "x-next-9045b.appspot.com",
  messagingSenderId: "594016290059",
  appId: "1:594016290059:web:513dbe07bbbeda4323ce0e",
  measurementId: "G-4G3ZTF0F3C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
