// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ4xoP30qx0gg2A4LkFqRE4X4mHisa-M4",
  authDomain: "coderecomerce.firebaseapp.com",
  projectId: "coderecomerce",
  storageBucket: "coderecomerce.appspot.com",
  messagingSenderId: "897043643550",
  appId: "1:897043643550:web:3a504cdc9ff8ac1f174f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app