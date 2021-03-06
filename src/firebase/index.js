import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyBLY5NwFGNWQRFRDmfus8laeYCzhs9eGB8",
    authDomain: "ecom-d6dfc.firebaseapp.com",
    databaseURL: "https://ecom-d6dfc.firebaseio.com",
    projectId: "ecom-d6dfc",
    storageBucket: "ecom-d6dfc.appspot.com",
    messagingSenderId: "614281200389",
    appId: "1:614281200389:web:6add3052e8b0cbba7fad6c"
};

const app = firebase.initializeApp(config);
// app.functions().useFunctionsEmulator('http://localhost:5001');
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

export {app, auth, db, functions};