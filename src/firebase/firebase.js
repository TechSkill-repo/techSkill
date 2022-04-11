import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDySL1O_skp72TZHCYjJWj_yRRdKa0owX8",
  authDomain: "techpedia-b6807.firebaseapp.com",
  projectId: "techpedia-b6807",
  storageBucket: "techpedia-b6807.appspot.com",
  messagingSenderId: "577250452057",
  appId: "1:577250452057:web:47ff02e4ef2420cb994748",
  measurementId: "G-0N1NY9F509",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
