import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import { firebaseConfig } from '../../env'

// Initialize Firebase
var config = {
    ...firebaseConfig
};


firebase.initializeApp(config);

export const db = firebase.firestore()

export const menuColRef = db.collection("menu")
export const ordersColRef = db.collection("orders")