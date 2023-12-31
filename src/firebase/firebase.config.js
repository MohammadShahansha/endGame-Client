// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// apiKey: "AIzaSyC7zHY8PTxchM52JqYJkW9A9K42rKJl2X4",
//   authDomain: "scic-job-task.firebaseapp.com",
//   projectId: "scic-job-task",
//   storageBucket: "scic-job-task.appspot.com",
//   messagingSenderId: "841529080382",
//   appId: "1:841529080382:web:6ad152a7a6cd433c8b6f6f"