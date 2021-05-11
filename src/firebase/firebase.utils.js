import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDFz0Fjb8teD0-cwyMSu2TlmMELaUNoJw0",
  authDomain: "crown-db-38f8e.firebaseapp.com",
  databaseURL: "https://crown-db-38f8e-default-rtdb.firebaseio.com",
  projectId: "crown-db-38f8e",
  storageBucket: "crown-db-38f8e.appspot.com",
  messagingSenderId: "278273317227",
  appId: "1:278273317227:web:0c601ff6cb69ee653e142e",
  measurementId: "G-482XJ4BNDH",
};
firebase.initializeApp(config);

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth; // what store from userAuth we get
    const createdAt = new Date(); // and date when it(account) was created too
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef; // we return userref so it may be needed later
};

/// for firebase auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
