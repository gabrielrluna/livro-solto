// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
/* storage */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgQfcxeTLAbYZan-h3oHwGaXni71dAtJU",
  authDomain: "app-autenticacao-d436c.firebaseapp.com",
  databaseURL: "https://app-autenticacao-d436c-default-rtdb.firebaseio.com",
  projectId: "app-autenticacao-d436c",
  storageBucket: "app-autenticacao-d436c.appspot.com",
  messagingSenderId: "60811913208",
  appId: "1:60811913208:web:96dd28355140c9927e580d",
  measurementId: "G-Q2SHQPWSX0",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
