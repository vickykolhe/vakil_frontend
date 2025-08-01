// src/context/CaseContext.js
import React, { createContext, useContext, useState } from 'react';

const CaseContext = createContext();

export function CaseProvider({ children }) {
  const [cases, setCases] = useState([]);

  const addCase = (newCase) => {
    setCases((prevCases) => [...prevCases, newCase]);
  };

  return (
    <CaseContext.Provider value={{ cases, addCase }}>
      {children}
    </CaseContext.Provider>
  );
}

export const useCaseContext = () => useContext(CaseContext);
