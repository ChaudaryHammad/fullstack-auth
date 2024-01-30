// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-43a4a.firebaseapp.com",
  projectId: "auth-43a4a",
  storageBucket: "auth-43a4a.appspot.com",
  messagingSenderId: "521798498654",
  appId: "1:521798498654:web:e73199694c2c97caecb7cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);