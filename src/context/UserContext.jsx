import React, { createContext, useEffect, useState } from "react";
import accountService from "../service/accountService";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [sessionId, setSessionId] = useState(getLocalStorageSessionId);

  function getLocalStorageSessionId() {
    return localStorage.getItem("session_id");
  }

  useEffect(() => {
    if (sessionId) {
      localStorage.setItem("session_id", sessionId);

      accountService.getDetails().then((data) => {
        localStorage.setItem("user", JSON.stringify(data));

        setUser(data);
      });
    }
  }, [sessionId]);

  return (
    <UserContext.Provider value={{ user, setUser, setSessionId }}>
      {children}
    </UserContext.Provider>
  );
}
