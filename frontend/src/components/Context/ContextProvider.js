import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [usuario, setUser] = useState(null);

  const t = (r) =>{
      setUser(r)
  }

  const user = () => {return usuario}

  const contextValue = {
    user,
    t,usuario
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
