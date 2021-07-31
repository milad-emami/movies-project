import React, { createContext, useEffect, useState } from "react";

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
      fetch(`
        https://api.themoviedb.org/3/account?api_key=293a7d3b6bf12a19fa75475364fcbd0f&session_id=${sessionId}`)
        .then((r) => r.json())
        .then((data) => setUser(data));
    }
  }, [sessionId]);

  return (
    <UserContext.Provider value={{ user, setUser, setSessionId }}>
      {children}
    </UserContext.Provider>
  );
}
