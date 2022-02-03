// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';

const firebaseConfig = {
  apiKey: "AIzaSyDD5-IQS9iwT3d1aJ2k80cJw-J6BXXDgfU",
  authDomain: "facebook-clone-2751f.firebaseapp.com",
  projectId: "facebook-clone-2751f",
  storageBucket: "facebook-clone-2751f.appspot.com",
  messagingSenderId: "665709536727",
  appId: "1:665709536727:web:3ea444265358a00f9c5792",
  measurementId: "G-428454G408"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider, db}
export default firebase

