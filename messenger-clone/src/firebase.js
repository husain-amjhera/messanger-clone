import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCa0BF3kXxAzudkVIuDf-3eDj18S8yM8Ws",
    authDomain: "messenger-clone-cbec6.firebaseapp.com",
    databaseURL: "https://messenger-clone-cbec6.firebaseio.com",
    projectId: "messenger-clone-cbec6",
    storageBucket: "messenger-clone-cbec6.appspot.com",
    messagingSenderId: "17957693496",
    appId: "1:17957693496:web:864d1b1c6d5942cf459ecd",
    measurementId: "G-EQK1C45NRF"
});

const db = firebaseApp.firestore();

export default db;