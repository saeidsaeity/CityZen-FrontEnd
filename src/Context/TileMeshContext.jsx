import { createContext, useState } from "react";
export const TileMeshContext = createContext();

export const TileMeshProvider = ({ children }) => {
  //NEW TILE
  const [newTileMesh, setNewTileMesh] = useState(); // the new tile mesh thing
  return (
    <TileMeshContext.Provider
      value={{
        newTileMesh,
        setNewTileMesh,
      }}
    >
      {children}
    </TileMeshContext.Provider>
  );
};
