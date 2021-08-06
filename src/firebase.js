import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCdyttVtect23Aq003SZ71xaiwPgadZK8E",
    authDomain: "disneyplus-clone-14a1e.firebaseapp.com",
    projectId: "disneyplus-clone-14a1e",
    storageBucket: "disneyplus-clone-14a1e.appspot.com",
    messagingSenderId: "119811847204",
    appId: "1:119811847204:web:7ba364bb7062833556d4b1",
    measurementId: "G-T8T04XDX48"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;