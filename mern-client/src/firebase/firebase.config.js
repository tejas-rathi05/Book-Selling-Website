// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClY2hZvm8xBoCylZ77SJHMxn9Bt_-a_4Y",
  authDomain: "mern-book-inventory-1c677.firebaseapp.com",
  projectId: "mern-book-inventory-1c677",
  storageBucket: "mern-book-inventory-1c677.appspot.com",
  messagingSenderId: "365273786151",
  appId: "1:365273786151:web:912db20ed2a3db61146b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;