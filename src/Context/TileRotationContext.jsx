import { createContext, useState } from "react";
export const TileRotationContext = createContext();

export const TileRotationProvider = ({ children }) => {
  //NEW TILE
  const [tileRotation, setTileRotation] = useState(0); // the new tile mesh thing
  return (
    <TileRotationContext.Provider
      value={{
        tileRotation,
        setTileRotation
      }}
    >
      {children}
    </TileRotationContext.Provider>
  );
};
