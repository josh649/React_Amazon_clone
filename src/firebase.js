import firebase from "firebase";





const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDCL9Qa_1KaSKeRk9qfmVwcORNLxxBIT9U",
  authDomain: "clone-92269.firebaseapp.com",
  databaseURL: "https://clone-92269.firebaseio.com",
  projectId: "clone-92269",
  storageBucket: "clone-92269.appspot.com",
  messagingSenderId: "1092329417326",
  appId: "1:1092329417326:web:2a47ffec53dfddf0d5947f",
  measurementId: "G-SVK8B082G4",

});




const auth = firebase.auth();


export{auth};