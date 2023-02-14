// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6KL3YwL9d2iwqiNQ4r-sZgaxcupeK4T4",
  authDomain: "livrosolto.firebaseapp.com",
  projectId: "livrosolto",
  storageBucket: "livrosolto.appspot.com",
  messagingSenderId: "976852127875",
  appId: "1:976852127875:web:825aba2155da8ee0700bb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
