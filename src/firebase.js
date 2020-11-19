import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3BVAyAhThqrFl6vV4kIBBdjMaVPxoe24",
  authDomain: "whatsapp-clone-a0a87.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a0a87.firebaseio.com",
  projectId: "whatsapp-clone-a0a87",
  storageBucket: "whatsapp-clone-a0a87.appspot.com",
  messagingSenderId: "1061992053147",
  appId: "1:1061992053147:web:cb0a4904680869e0b7093e",
  measurementId: "G-6E5L5YVTZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export  {auth,provider};
export default db;