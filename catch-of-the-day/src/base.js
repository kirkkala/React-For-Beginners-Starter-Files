import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/database'; // Added after finding this out from console messages...

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWrMiiBe1c6TuUFOe-7KX4xfMRIetGTsQ",
  authDomain: "catch-of-the-day-kirkkala.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kirkkala.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
