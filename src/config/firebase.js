import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlwjqFO208beEismKjp7D4NhxT8_mfSoo",
    authDomain: "edures-59af0.firebaseapp.com",
    databaseURL: "https://edures-59af0.firebaseio.com",
    projectId: "edures-59af0",
    storageBucket: "edures-59af0.appspot.com",
    messagingSenderId: "867500896072",
    appId: "1:867500896072:web:90233d3192881699974d7d"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;