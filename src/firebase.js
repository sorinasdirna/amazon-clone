import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByvzBpW-5l7zbKL-sHoJIMXOsMLwVUZgw",
    authDomain: "clone-4b1ca.firebaseapp.com",
    projectId: "clone-4b1ca",
    storageBucket: "clone-4b1ca.appspot.com",
    messagingSenderId: "704826847321",
    appId: "1:704826847321:web:084006baafbd01766a8148",
    measurementId: "G-R1NMW7CJ5C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
