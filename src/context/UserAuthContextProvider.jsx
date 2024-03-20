/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";
export const UserAuthContext = createContext();
export default function UserAuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [myVar, setMyVar] = useState(10);
  return (
    <>
      <UserAuthContext.Provider
        value={{
          myVar,
          setMyVar,
          isLoggedIn,
          setIsLoggedIn,
          username,
          setUsername,
        }}
      >
        {children}
      </UserAuthContext.Provider>
    </>
  );
}
export { UserAuthContextProvider };
