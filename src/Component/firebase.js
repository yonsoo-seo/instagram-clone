import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

firebase.initializeApp({
<<<<<<< HEAD
  apiKey: "AIzaSyDwh1UMTwJ6k7eSxx-POj4afO6svYGRhpk",
  authDomain: "instagram-clone-aa309.firebaseapp.com",
  projectId: "instagram-clone-aa309",
  storageBucket: "instagram-clone-aa309.appspot.com",
  messagingSenderId: "472854624684",
  appId: "1:472854624684:web:4f127031e9f18bf648e209",
=======
  apiKey: "<api-Key>",
  authDomain: "<auth-Domain>",
  projectId: "<project-Id>",
  storageBucket: "<storage-Bucket>",
  messagingSenderId: "<messaging-Sender-Id>",
  appId: "<app-Id>",
>>>>>>> fe65c9ed830e39ba33dded68a5aee3410bdd09f4
});

export const auth = firebase.auth();
export const storage = firebase.storage();
