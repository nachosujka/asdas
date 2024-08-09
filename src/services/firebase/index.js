import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgxGJmR5bMwBUOkVMxhEycVDFVIsh-0a0",
  authDomain: "ecommerce-81097.firebaseapp.com",
  projectId: "ecommerce-81097",
  storageBucket: "ecommerce-81097.appspot.com",
  messagingSenderId: "742818025221",
  appId: "1:742818025221:web:911118be615766d9a7b16c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
