import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAyjN6pOEugiH-8GzyF5KdFzJlvCy7bkvY",
    authDomain: "photowall-5f6d4.firebaseapp.com",
    databaseURL: "https://photowall-5f6d4.firebaseio.com",
    projectId: "photowall-5f6d4",
    storageBucket: "photowall-5f6d4.appspot.com",
    messagingSenderId: "366859663096"
  };
  firebase.initializeApp(config);

  const database = firebase.database()

  export {database}