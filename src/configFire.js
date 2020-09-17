import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAiVvghMiKyPfuIz4SqNMmltd5X0ewqQMU",
    authDomain: "login-a274e.firebaseapp.com",
    databaseURL: "https://login-a274e.firebaseio.com",
    projectId: "login-a274e",
    storageBucket: "login-a274e.appspot.com",
    messagingSenderId: "337544459326",
    appId: "1:337544459326:web:d851b6fcb9a069945fcd6f"
};

const configFire = firebase.initializeApp(firebaseConfig);

export default configFire