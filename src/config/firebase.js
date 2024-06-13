import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ3SvBNrKp8xsbxnnUZT5kYRdzMXibCUA",
  authDomain: "easycards-da879.firebaseapp.com",
  projectId: "easycards-da879",
  storageBucket: "easycards-da879.appspot.com",
  messagingSenderId: "963554179240",
  appId: "1:963554179240:web:1f068ac29b4edebb722a9d",
  measurementId: "G-VDKWT4XMXB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
