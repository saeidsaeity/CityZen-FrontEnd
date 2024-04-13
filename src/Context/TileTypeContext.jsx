import { createContext, useState } from "react";
export const TileTypeContext = createContext();

export const TileTypeProvider = ({ children }) => {
  //NEW TILE
  const [newTileType, setNewTileType] = useState(); // the new tile mesh thing
  return (
    <TileTypeContext.Provider
      value={{
       newTileType,
       setNewTileType
      }}
    >
      {children}
    </TileTypeContext.Provider>
  );
};
