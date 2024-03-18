import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8AEUD9Wqtyp860o9JjxcTIvY-X6sI08",
  authDomain: "react-netflix-clone-a5f0b.firebaseapp.com",
  projectId: "react-netflix-clone-a5f0b",
  storageBucket: "react-netflix-clone-a5f0b.appspot.com",
  messagingSenderId: "511523830149",
  appId: "1:511523830149:web:7ec58c19b2346723412cec",
  measurementId: "G-SFQ8W2JLC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);