// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBM-G6N9IvkRVXQjLr6rXNPxf_0-mRiO6Y",
  authDomain:"doctot-portal.firebaseapp.com",
  projectId:"doctot-portal",
  storageBucket:"doctot-portal.appspot.com",
  messagingSenderId:"413790159592",
  appId:"1:413790159592:web:3ad8cb63e27e124cad3f5d"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 

export default auth;