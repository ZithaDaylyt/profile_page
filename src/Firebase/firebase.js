import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtIyLg7OEMmPpEfMDICMF5syFBp3ohn9I",
    authDomain: "profilepage-6e9ca.firebaseapp.com",
    projectId: "profilepage-6e9ca",
    storageBucket: "profilepage-6e9ca.appspot.com",
    messagingSenderId: "298730680402",
    appId: "1:298730680402:web:3efd4f501a21a985c0af8b"
});

const db = firebaseApp.firestore();

export default db;