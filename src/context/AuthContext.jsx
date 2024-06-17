import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateUser = (data) => {
    console.log("in Update user context");
    console.log(data);
    if (data && data.userInfo) {
      setCurrentUser(data.userInfo);
    } else {
      setCurrentUser(data);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
