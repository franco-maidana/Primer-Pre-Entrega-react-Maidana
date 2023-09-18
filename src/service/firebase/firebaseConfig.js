import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8yGa8WTDQiYf1aDo_ATlh6cMeP-YHNVc",
  authDomain: "backend47165-5eaa5.firebaseapp.com",
  projectId: "backend47165-5eaa5",
  storageBucket: "backend47165-5eaa5.appspot.com",
  messagingSenderId: "683240455136",
  appId: "1:683240455136:web:573780facc6e8324ac0985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos = getFirestore(app)