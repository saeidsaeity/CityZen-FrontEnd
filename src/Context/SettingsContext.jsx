import { createContext, useState } from "react";
export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  //NEW TILE
  const [volume, setVolume] = useState(50); // the new tile mesh thing
  return (
    <SettingsContext.Provider
      value={{
        volume,
        setVolume
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
