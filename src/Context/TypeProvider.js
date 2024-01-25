import { createContext, useState } from "react";

export const TypeContext = createContext();

const TypeContextProvider = ({ children }) => {
  const [type, setType] = useState("property");
  const info = {
    type,
    setType,
  };

  return <TypeContext.Provider value={info}>{children}</TypeContext.Provider>;
};

export default TypeContextProvider;
