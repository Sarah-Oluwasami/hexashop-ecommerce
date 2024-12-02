import { createContext, useContext, useState } from "react";
const ButtonContext = createContext();

function ButtonProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((togg) => !togg);
  const name = "sarah";

  return (
    <ButtonContext.Provider value={{ isOpen, toggle, name }}>
      {children}
    </ButtonContext.Provider>
  );
}

function useButtonProvider() {
  const context = useContext(ButtonContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");
  return context;
}

export { ButtonProvider, useButtonProvider };
