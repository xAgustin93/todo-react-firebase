import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC93cELICRTukR-wZ1jEk5MU28VPRfdOlo",
  authDomain: "todo-dev-1f55a.firebaseapp.com",
  databaseURL: "https://todo-dev-1f55a.firebaseio.com",
  projectId: "todo-dev-1f55a",
  storageBucket: "todo-dev-1f55a.appspot.com",
  messagingSenderId: "92947681348",
  appId: "1:92947681348:web:dffbf834ae4450aac06c11",
};

export default firebase.initializeApp(firebaseConfig);
