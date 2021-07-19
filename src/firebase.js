import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsjPaP6tzSE2pVM5y80bjQdi5mFr9-frg",
  authDomain: "clone-6f1af.firebaseapp.com",
  projectId: "clone-6f1af",
  storageBucket: "clone-6f1af.appspot.com",
  messagingSenderId: "858040701989",
  appId: "1:858040701989:web:3ea5da44f384c098c79bcc",
  measurementId: "G-3ERZYRMQBR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
