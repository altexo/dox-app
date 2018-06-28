
import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBF-SQwLBa6Vm-gWOc5NrqzsPC8INt70PA",
    authDomain: "dox-solutions-2018.firebaseapp.com",
    databaseURL: "https://dox-solutions-2018.firebaseio.com",
    projectId: "dox-solutions-2018",
    storageBucket: "dox-solutions-2018.appspot.com",
    messagingSenderId: "943999253530"
  };
 // firebase.initializeApp(config);
const fire = firebase.initializeApp(config);

export default fire;