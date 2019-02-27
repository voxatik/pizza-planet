import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyD81ZjdLKZTJaIw4FccL9L0sy60IWlwwGA',
    authDomain: 'pizza-planet-4c599.firebaseapp.com',
    databaseURL: 'https://pizza-planet-4c599.firebaseio.com',
    projectId: 'pizza-planet-4c599',
    storageBucket: 'pizza-planet-4c599.appspot.com',
    messagingSenderId: '239602075628'
};


firebase.initializeApp(config);

export const db = firebase.firestore()

export const menuColRef = db.collection("menu")
export const ordersColRef = db.collection("orders")