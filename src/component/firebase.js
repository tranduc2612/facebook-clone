// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat';


const firebaseConfig = {
  apiKey: "AIzaSyDD5-IQS9iwT3d1aJ2k80cJw-J6BXXDgfU",
  authDomain: "facebook-clone-2751f.firebaseapp.com",
  projectId: "facebook-clone-2751f",
  storageBucket: "facebook-clone-2751f.appspot.com",
  messagingSenderId: "665709536727",
  appId: "1:665709536727:web:2b4073e2709baacc9c5792",
  measurementId: "G-Q6MBNSPCF1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider}
export default firebase

