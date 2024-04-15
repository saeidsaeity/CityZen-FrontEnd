import { createContext, useState } from "react";
export const ColourContext = createContext();

export const ColourProvider = ({ children }) => {
  //NEW TILE
  const [beamColour, setBeamColour] = useState('yellow'); // the new tile mesh thing
  return (
    <ColourContext.Provider
      value={{
        beamColour,
        setBeamColour
      }}
    >
      {children}
    </ColourContext.Provider>
  );
};
