import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCWgaFZcUsFBgd6FIPjh2jHxacdhZDlEg",
  authDomain: "easy-cards-pro.firebaseapp.com",
  projectId: "easy-cards-pro",
  storageBucket: "easy-cards-pro.appspot.com",
  messagingSenderId: "641301914906",
  appId: "1:641301914906:web:14a3217e467625f5a6b8a3",
  measurementId: "G-42406S8QYB"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;