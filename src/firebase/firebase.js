import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyCrAdRYxx-jwkC-vvWEPDlIz1sn50HX0S4",
    authDomain: "alko-mixer.firebaseapp.com",
    databaseURL: "https://alko-mixer.firebaseio.com",
    projectId: "alko-mixer",
    storageBucket: "alko-mixer.appspot.com",
    messagingSenderId: "388045015304"
  };
  firebase.initializeApp(config);
const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();
  

// firebaseDB.ref('ingredients/strong').once('value')// once returning a promise containing data we requesting
//     .then((snapshot) => {// snapshot is a response from database
//         console.log(snapshot.val());// val() returning value of a database
    
//     })
//     .catch((e) => {
//         console.log(e);
    
// })

export {
    firebase,
  firebaseDB,
    googleAuth
    
}