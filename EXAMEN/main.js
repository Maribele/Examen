
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAnmRzhSrqE-i2MD892orvnxmPKtMuIc4I",
    authDomain: "examen-58b55.firebaseapp.com",
    projectId: "examen-58b55",
    storageBucket: "examen-58b55.appspot.com",
    messagingSenderId: "861264373207",
    appId: "1:861264373207:web:d3b6a0861f28b739fa5792"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
