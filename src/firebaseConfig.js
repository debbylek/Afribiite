import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJT9URXTaRiktYDUnFiXubrccigWbAhXk",
  authDomain: "afribite-58785.firebaseapp.com",
  projectId: "afribite-58785",
  storageBucket: "afribite-58785.firebasestorage.app",
  messagingSenderId: "980273064334",
  appId: "1:980273064334:web:be560ada65e6d257e09cdf",
  measurementId: "G-24F0MX2MW8"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db }; 