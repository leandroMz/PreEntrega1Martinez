import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQ4xoP30qx0gg2A4LkFqRE4X4mHisa-M4",
  authDomain: "coderecomerce.firebaseapp.com",
  projectId: "coderecomerce",
  storageBucket: "coderecomerce.appspot.com",
  messagingSenderId: "897043643550",
  appId: "1:897043643550:web:3a504cdc9ff8ac1f174f8f"
}

const app = initializeApp(firebaseConfig)
export const initFirebase = () => app