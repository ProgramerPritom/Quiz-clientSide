// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqfVU7UwV_j_m8vyP9M5uGEpKENFvUT-4",
  authDomain: "quiz-application-6fca7.firebaseapp.com",
  projectId: "quiz-application-6fca7",
  storageBucket: "quiz-application-6fca7.appspot.com",
  messagingSenderId: "559761898712",
  appId: "1:559761898712:web:30cc4c5395e78187802bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;