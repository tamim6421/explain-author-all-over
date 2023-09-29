// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcyW34BPLsZcylJ5PzuT_nE2kdkdS9UcA",
  authDomain: "auth--allover.firebaseapp.com",
  projectId: "auth--allover",
  storageBucket: "auth--allover.appspot.com",
  messagingSenderId: "59367836022",
  appId: "1:59367836022:web:b5462ee069611017a21257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth