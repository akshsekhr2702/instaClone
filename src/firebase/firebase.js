// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC_x_ATiAbzI4QJsmtDZN5f-xzcPPMGAFM",
  authDomain: "insta-master-aa5a0.firebaseapp.com",
  projectId: "insta-master-aa5a0",
  storageBucket: "insta-master-aa5a0.appspot.com",
  messagingSenderId: "460096018741",
  appId: "1:460096018741:web:c1e0bb94761c8e38d7947c",
  measurementId: "G-0D46SEKGR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{app, auth, firestore, storage};