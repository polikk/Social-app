import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';    

const config =  {
    apiKey: "AIzaSyBnSGZompnUjTAjIZCTILboNJjfaQqV6hw",
    authDomain: "social-f51a1.firebaseapp.com",
    projectId: "social-f51a1",
    storageBucket: "social-f51a1.appspot.com",
    messagingSenderId: "636652659194",
    appId: "1:636652659194:web:b3ccb3dfee1aae67728443"
  };

const firebase = Firebase.initializeApp(config);

const {FieldValue} = firebase.firestore;
export{ firebase, FieldValue}