import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

import { firebaseConfig } from '@/../env'

// Initialize Firebase
firebase.initializeApp({...firebaseConfig })

//make exportable references to firebase
//services
export const db = firebase.firestore()
export const auth = firebase.auth()
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

//firestore collection references
export const menuColRef = db.collection("menu")
export const ordersColRef = db.collection("orders")

export const googleProvider = new firebase.auth.GoogleAuthProvider()
