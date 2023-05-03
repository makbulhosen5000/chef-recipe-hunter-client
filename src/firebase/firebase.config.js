// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxK-60FJHEvZVqOqXHgD1Pae-Wokitgvg",
  authDomain: "chef-recipe-hunter-clien-9a62a.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-9a62a",
  storageBucket: "chef-recipe-hunter-clien-9a62a.appspot.com",
  messagingSenderId: "210768924135",
  appId: "1:210768924135:web:63f98b9dd01eb397820142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;