import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGJCjplfbELYlfa4Bob6dKvljMyqwuH_4",
  authDomain: "crwn-db-2f724.firebaseapp.com",
  databaseURL: "https://crwn-db-2f724.firebaseio.com",
  projectId: "crwn-db-2f724",
  storageBucket: "crwn-db-2f724.appspot.com",
  messagingSenderId: "847923429771",
  appId: "1:847923429771:web:075bd738417e3433916f8e",
  measurementId: "G-35GQ0Y68GE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;