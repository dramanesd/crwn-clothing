import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { persistReducer } from 'redux-persist';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if(!snapShop.exists) {
    const {displayName, email} = userAuth;
    const createdAt= new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user ', error.message);
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshopToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;