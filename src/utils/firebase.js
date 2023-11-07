// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8aAuazCbP68RLdoYtxHrvBzDCL-87DU8",
  authDomain: "netflixgpt-a7b1f.firebaseapp.com",
  projectId: "netflixgpt-a7b1f",
  storageBucket: "netflixgpt-a7b1f.appspot.com",
  messagingSenderId: "1006316159169",
  appId: "1:1006316159169:web:c77c15ea843b3051a75440",
  measurementId: "G-3R5YTBWWTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
