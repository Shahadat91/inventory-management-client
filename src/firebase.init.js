// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdLi_JGJq3DvQqJ1HPK71Nm2ARhciK8kQ",
  authDomain: "inventory-management-837f3.firebaseapp.com",
  projectId: "inventory-management-837f3",
  storageBucket: "inventory-management-837f3.appspot.com",
  messagingSenderId: "796342792095",
  appId: "1:796342792095:web:750658a3426737f48897aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;