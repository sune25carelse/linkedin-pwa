import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEuLHI0uaWzdthuivzBtHAKl7CYAfbpHE",
  authDomain: "linkedin-clone-88196.firebaseapp.com",
  projectId: "linkedin-clone-88196",
  storageBucket: "linkedin-clone-88196.appspot.com",
  messagingSenderId: "223386909701",
  appId: "1:223386909701:web:58338e560301bb98d1706c",
  measurementId: "G-3QR061GDM7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
