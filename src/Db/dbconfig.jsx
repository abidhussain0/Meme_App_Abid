import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAbcbMpZd7xP3xZLQ-bUI9qXy7Kpq8N96A",
    authDomain: "upheld-flow-428906-u6.firebaseapp.com",
    projectId: "upheld-flow-428906-u6", 
    storageBucket: "upheld-flow-428906-u6.appspot.com",
    messagingSenderId: "372082602426",
    appId: "1:372082602426:web:988f5c2a41bda0f6a82d83",
    measurementId: "G-SW13BXL1MC",
    databaseURL: "https://upheld-flow-428906-u6-default-rtdb.firebaseio.com"

  };

 export const app = initializeApp(firebaseConfig)