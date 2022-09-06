import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAxBu5ur1EE-DSGTWR6WT1CfBx-gCeU-3I",
  authDomain: "imageapp-b3c3c.firebaseapp.com",
  projectId: "imageapp-b3c3c",
  storageBucket: "imageapp-b3c3c.appspot.com",
  messagingSenderId: "202863346022",
  appId: "1:202863346022:web:bb5ed3d114c9d1cbd808a7",
  measurementId: "G-5J7LQQFHJK"
};


const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);

export {projectStorage}