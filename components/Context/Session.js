import { React, createContext, useState } from "react";

export const Sessionform = createContext();

const SessionProvider = ({ children }) => {
  const [sessionform, setsessionform] = useState({
    id: null,
    modalShow: false,
  });

  return (
    <Sessionform.Provider value={{ sessionform, setsessionform }}>
      {children}
    </Sessionform.Provider>
  );
};

export default SessionProvider;
