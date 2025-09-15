import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isBurger, setIsBurger] = useState(false);

  const switchBurger = () => setIsBurger((prev) => !prev);

  const value = { isBurger, switchBurger };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
