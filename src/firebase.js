
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAuubcRsToFpxGRQ8UoeFVf8UJw66tndiA",
  authDomain: "drive-clone-yt-fd399.firebaseapp.com",
  projectId: "drive-clone-yt-fd399",
  storageBucket: "drive-clone-yt-fd399.appspot.com",
  messagingSenderId: "274058977225",
  appId: "1:274058977225:web:f5fbcc2e5fdb9299aed218"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider =firebase.auth.GoogleAuthProvider();

export {db,storage,auth,provider}