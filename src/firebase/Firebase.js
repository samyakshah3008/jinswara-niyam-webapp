// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeKupMjrZ4n2dMCcmZ9RMknxD7unhsc78",
  authDomain: "jinswara-niyam-app.firebaseapp.com",
  projectId: "jinswara-niyam-app",
  storageBucket: "jinswara-niyam-app.appspot.com",
  messagingSenderId: "149775712242",
  appId: "1:149775712242:web:73b696f6544de9936e356b",
  measurementId: "G-ZPBTGVHRQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
