import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  //   databaseURL: "https://project-id.firebaseio.com",
  measurementId: "G-measurement-id",
  apiKey: "AIzaSyC5f51B9AZ-lZ9vQrTzo3UVnbQNbzkC6SA",
  authDomain: "mealstogo-b78aa.firebaseapp.com",
  projectId: "mealstogo-b78aa",
  storageBucket: "mealstogo-b78aa.appspot.com",
  messagingSenderId: "881530644581",
  appId: "1:881530644581:web:bc74f6f15afac580f37e8c",
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
