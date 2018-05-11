// Import Firebase
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4lLuxmMB_Y6usXtyZgoE50V-Trfo2XKc",
  authDomain: "fun-food-friends-34ffc.firebaseapp.com",
  databaseURL: "https://fun-food-friends-34ffc.firebaseio.com",
  projectId: "fun-food-friends-34ffc",
  storageBucket: "fun-food-friends-34ffc.appspot.com",
  messagingSenderId: "276434109560"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;