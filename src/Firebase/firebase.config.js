// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8sN4Qo2zccdKDuiJekCEGqNmfYmG3-aQ",
  authDomain: "react-dragon-news-auth-ph.firebaseapp.com",
  projectId: "react-dragon-news-auth-ph",
  storageBucket: "react-dragon-news-auth-ph.firebasestorage.app",
  messagingSenderId: "11629845796",
  appId: "1:11629845796:web:7d7ef93a70efd4f08aa7b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;