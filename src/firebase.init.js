// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQvW3BIiIQSUMmQCs6xb3MY4I5FBARix4",
  authDomain: "ema-john-simple-8aa6d.firebaseapp.com",
  projectId: "ema-john-simple-8aa6d",
  storageBucket: "ema-john-simple-8aa6d.appspot.com",
  messagingSenderId: "603721460767",
  appId: "1:603721460767:web:7b5fd27d45ca0aa618f92a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
export default auth;