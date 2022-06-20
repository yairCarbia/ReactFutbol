// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD13H-1WFUgh4VUNVv2HsuWa3JHZ4kEVSo",
    authDomain: "reactcarbia.firebaseapp.com",
    projectId: "reactcarbia",
    storageBucket: "reactcarbia.appspot.com",
    messagingSenderId: "232059702994",
    appId: "1:232059702994:web:c06a78d4d8b944dad9e70b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);