import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2GPuAksi4yrE2kuSyTIU9YgOvSjTc8XU",
  authDomain: "spyros-5955c.firebaseapp.com",
  projectId: "spyros-5955c",
  storageBucket: "spyros-5955c.appspot.com",
  messagingSenderId: "663358989549",
  appId: "1:663358989549:web:10dbb43c52e60ff7a018e4",
  measurementId: "G-31X7NK7V27"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;