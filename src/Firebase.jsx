// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfA5MCNyATRBjHjGCsaKIVr2MjHwW6q4",
  authDomain: "farm-cop-64102.firebaseapp.com",
  projectId: "farm-cop-64102",
  storageBucket: "farm-cop-64102.appspot.com",
  messagingSenderId: "680247109521",
  appId: "1:680247109521:web:897f17091b2ea38b041c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default app