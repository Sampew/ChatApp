

import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, querySnapshot} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNRpB6kz-_hOTup9TrJRzJjX1pFa460JM",
  authDomain: "chat-bd5b3.firebaseapp.com",
  projectId: "chat-bd5b3",
  storageBucket: "chat-bd5b3.appspot.com",
  messagingSenderId: "450634211037",
  appId: "1:450634211037:web:e2bd06345fc09611878534"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
};