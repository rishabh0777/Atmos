import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [loc, setLoc] = useState('');

  return (
    <InputContext.Provider value={{ loc, setLoc }}>
      {children}
    </InputContext.Provider>
  );
};
