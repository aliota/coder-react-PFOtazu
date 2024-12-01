import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHPCSd4l6qP3NJ0iJaV2TtSgV_Ay7vDP0",
  authDomain: "pfcoder-ca299.firebaseapp.com",
  projectId: "pfcoder-ca299",
  storageBucket: "pfcoder-ca299.firebasestorage.app",
  messagingSenderId: "312037655693",
  appId: "1:312037655693:web:bc2d086b3f417112280ec4",
  measurementId: "G-4ERPL7S4EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
