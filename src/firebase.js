import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBuPgNEBvqQI_7sRm0-lLS5Tfekpywlc1o",
    authDomain: "netflix-clone-deea8.firebaseapp.com",
    projectId: "netflix-clone-deea8",
    storageBucket: "netflix-clone-deea8.appspot.com",
    messagingSenderId: "114444381606",
    appId: "1:114444381606:web:1056c7473bd47a3dd2f367"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth(firebaseApp);

  export {auth}
  export default db;