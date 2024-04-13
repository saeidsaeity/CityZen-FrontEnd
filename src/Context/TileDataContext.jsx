import { createContext, useState } from "react";
export const TileDataContext = createContext();

export const TileDataProvider = ({ children }) => {
  //NEW TILE
  const [newTileData, setNewTileData] = useState(); // the new tile mesh thing
  return (
    <TileDataContext.Provider
      value={{
        newTileData,
        setNewTileData,
      }}
    >
      {children}
    </TileDataContext.Provider>
  );
};
