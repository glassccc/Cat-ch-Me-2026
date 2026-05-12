import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOZ3JrKRnyaaU5LTdY8xOqUsna0vNNY-8",
    authDomain: "cat-ch-the-koonyang.firebaseapp.com",
    projectId: "cat-ch-the-koonyang",
    storageBucket: "cat-ch-the-koonyang.firebasestorage.app",
    messagingSenderId: "1057535308983",
    appId: "1:1057535308983:web:1249812be3c929bd3c4932",
    measurementId: "G-XKNZ99YER4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);