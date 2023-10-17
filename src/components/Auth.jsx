import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext("auth");
export default function Auth({ children }) {
  const [authent, setAuthent] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthent(user);
        console.log(authent);
      } else {
        setAuthent(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <authContext.Provider value={authent}>{children}</authContext.Provider>
  );
}
