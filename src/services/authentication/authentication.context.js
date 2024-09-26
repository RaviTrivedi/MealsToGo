import { createContext, useEffect, useState } from "react";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
} from "./authentication.service";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      // setLoading(true);
      if (user) {
        setUser(user);
      } else {
      }
      setLoading(false);
    });
  }, []);

  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const onRegister = (email, password) => {
    setLoading(true);
    registerRequest(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const onLogout = () => {
    setLoading(true);
    logoutRequest(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
