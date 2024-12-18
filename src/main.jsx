import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import App from './App.jsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const myDB = getFirestore(app);
export {myDB}

//createRoot(document.getElementById('root')).render(<App/>);

const rootElement = document.getElementById('root');
if (!rootElement._reactRootContainer) {  
  createRoot(rootElement).render(<App/>);
} else {  
   rootElement._reactRootContainer.render(<App />);
}

