import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBK-G0lEQlLTXovjk1YxSghK4xc-7fdksg",
  authDomain: "usersmatecar.firebaseapp.com",
  projectId: "usersmatecar",
  storageBucket: "usersmatecar.appspot.com",
  messagingSenderId: "396161082390",
  appId: "1:396161082390:web:838333b4c084e845ee4137"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const auth = getAuth(app);

