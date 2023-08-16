// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeHG1eRM5SRXvK5UDqci0CbZUkhT6Qu3w",
  authDomain: "eventmaster-f544d.firebaseapp.com",
  projectId: "eventmaster-f544d",
  storageBucket: "eventmaster-f544d.appspot.com",
  messagingSenderId: "430484718179",
  appId: "1:430484718179:web:3a63fc08f0ed5cbac4ae56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();