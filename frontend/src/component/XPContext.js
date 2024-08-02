import React, { createContext, useContext, useState } from 'react';

const XPContext = createContext();

export const useXP = () => {
  return useContext(XPContext);
};

export const XPProvider = ({ children }) => {
  const [xp, setXP] = useState(0);

  return (
    <XPContext.Provider value={{ xp, setXP }}>
      {children}
    </XPContext.Provider>
  );
};
