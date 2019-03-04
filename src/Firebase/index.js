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

//firestore collection references
export const menuColRef = db.collection("menu")
export const ordersColRef = db.collection("orders")
