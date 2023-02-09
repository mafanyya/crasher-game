
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcaL5_TIztLzAqR6S4UinvW4dFNC2jDCo",
    authDomain: "crasher-ds.firebaseapp.com",
    projectId: "crasher-ds",
    storageBucket: "crasher-ds.appspot.com",
    messagingSenderId: "1047602510152",
    appId: "1:1047602510152:web:9f61832b4581f64b37db7d",
    measurementId: "G-FZHC9FY56R"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export {
    db,
    firebaseApp,

}
