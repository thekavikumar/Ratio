// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUTd27RRwqARfOaqg6s_0vTfIKI0g8h8c",
  authDomain: "ratio-a647e.firebaseapp.com",
  projectId: "ratio-a647e",
  storageBucket: "ratio-a647e.appspot.com",
  messagingSenderId: "892757388736",
  appId: "1:892757388736:web:586f304f5300448221ec25",
  measurementId: "G-RHYFP3P5H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
