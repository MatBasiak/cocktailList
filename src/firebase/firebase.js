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

const googleAuth = new firebase.auth.GoogleAuthProvider();
const firebaseDB = firebase.database();
const firebaseStrong = firebaseDB.ref('ingredients/strong');
const firebaseSoft = firebaseDB.ref('ingredients/soft');
const firebaseLowAlc = firebaseDB.ref('ingredients/strong');
const firebaseAddOns = firebaseDB.ref('ingredients/AddOns');

const firebaseCocktailsVodka = firebaseDB.ref('cocktails/vodkabase');
const firebaseCocktailsRum = firebaseDB.ref('cocktails/rumbase');
const firebaseCocktailsGin = firebaseDB.ref('cocktails/ginbase');
const firebaseCocktailsWhisky = firebaseDB.ref('cocktails/whiskybase');
const firebaseCocktailsTequilla = firebaseDB.ref('cocktails/tequillabase');
const firebaseCocktailsBurbon = firebaseDB.ref('cocktails/burbonbase');
const firebaseCocktailsCachaca = firebaseDB.ref('cocktails/cachacabase');
const firebaseCocktailsBrandy = firebaseDB.ref('cocktails/brandybase');


const firebaseLooper = (snapshot) => {
  const data = [];
 
      
  snapshot.forEach((childSnapshot) => {
    data.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
          
    })
  });
  return data;

}


  

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
  googleAuth, firebaseStrong, firebaseSoft, firebaseLowAlc,
  firebaseAddOns, firebaseCocktailsVodka, firebaseCocktailsRum, firebaseCocktailsGin, firebaseCocktailsWhisky, firebaseCocktailsTequilla, firebaseCocktailsBurbon, firebaseCocktailsCachaca, firebaseCocktailsBrandy,
    firebaseLooper
    
}