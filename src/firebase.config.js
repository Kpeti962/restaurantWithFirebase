import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBrJJLabGkpjjSHFsHDi_KzuthzDs_duKo",
    authDomain: "restaurantapp-f4aed.firebaseapp.com",
    databaseURL: "https://restaurantapp-f4aed-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-f4aed",
    storageBucket: "restaurantapp-f4aed.appspot.com",
    messagingSenderId: "559899265922",
    appId: "1:559899265922:web:eb3aac682e43b97aba9d9b"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};