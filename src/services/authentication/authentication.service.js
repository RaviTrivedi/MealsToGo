import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logoutRequest = (auth) => signOut(auth);
