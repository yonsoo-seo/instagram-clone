import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyDwh1UMTwJ6k7eSxx-POj4afO6svYGRhpk",
  authDomain: "instagram-clone-aa309.firebaseapp.com",
  projectId: "instagram-clone-aa309",
  torageBucket: "instagram-clone-aa309.appspot.com",
  messagingSenderId: "472854624684",
  appId: "1:472854624684:web:4f127031e9f18bf648e209",
});

export const auth = firebase.auth();
export const storage = firebase.storage();
