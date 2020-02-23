import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4-gDw87p1jd7iyoGXFLCdBPnJZVx4_ao",
    authDomain: "crwn-db-7c521.firebaseapp.com",
    databaseURL: "https://crwn-db-7c521.firebaseio.com",
    projectId: "crwn-db-7c521",
    storageBucket: "crwn-db-7c521.appspot.com",
    messagingSenderId: "5249983960",
    appId: "1:5249983960:web:82a64bffb0bc3ea821fead"
  };


export const createUserProfilDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;