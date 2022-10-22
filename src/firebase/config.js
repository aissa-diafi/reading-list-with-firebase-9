import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPRJglvS7DX423eCQ5sOgzUFPpOMNkNFY",
  authDomain: "readinglist-743e1.firebaseapp.com",
  projectId: "readinglist-743e1",
  storageBucket: "readinglist-743e1.appspot.com",
  messagingSenderId: "1015268351286",
  appId: "1:1015268351286:web:9cd44ed4ad76c1e6412797",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
