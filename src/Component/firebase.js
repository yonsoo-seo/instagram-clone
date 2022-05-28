import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "<api-Key>",
  authDomain: "<auth-Domain>",
  projectId: "<project-Id>",
  storageBucket: "<storage-Bucket>",
  messagingSenderId: "<messaging-Sender-Id>",
  appId: "<app-Id>",
});

export const auth = firebase.auth();
export const storage = firebase.storage();
