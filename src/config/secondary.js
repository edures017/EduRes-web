import firebase from "firebase";
var config = {
	apiKey: "AIzaSyDlwjqFO208beEismKjp7D4NhxT8_mfSoo",
	authDomain: "edures-59af0.firebaseapp.com",
	databaseURL: "https://edures-59af0.firebaseio.com",
	projectId: "edures-59af0",
	storageBucket: "edures-59af0.appspot.com",
	messagingSenderId: "867500896072",
	appId: "1:867500896072:web:b4ee4ea01041c048974d7d",
};
var secondaryApp = firebase.initializeApp(config, "Secondary");
export default secondaryApp;
