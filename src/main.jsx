import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKPHQHzAmfibV062GLvoUZ3Sdv0qdJPYU",
  authDomain: "essenceselecto-ecommerce.firebaseapp.com",
  projectId: "essenceselecto-ecommerce",
  storageBucket: "essenceselecto-ecommerce.appspot.com",
  messagingSenderId: "669449454738",
  appId: "1:669449454738:web:a6e6657977e66c4f1b124b"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
