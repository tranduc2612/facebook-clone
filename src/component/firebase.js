// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getFirestore,query,collection,orderBy } from 'firebase/firestore'
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyA3hIR_yU0-ywdoLYJrCdE9tmGSJGk3H3M",
  authDomain: "facebookcolone-c9604.firebaseapp.com",
  projectId: "facebookcolone-c9604",
  storageBucket: "facebookcolone-c9604.appspot.com",
  messagingSenderId: "784453660599",
  appId: "1:784453660599:web:1825c5622147db1ffd0232",
  measurementId: "G-YY4GMV76MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const q = query(collection(db, "posts"),orderBy("timestamp", "desc"));
const provider = new GoogleAuthProvider();

export {auth,provider, db,q}
export default firebase

