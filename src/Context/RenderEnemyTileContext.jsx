import { createContext, useState } from "react";
export const RenderEnemyTileContext = createContext();

export const RenderEnemyTileProvider = ({ children }) => {
  //NEW TILE
  const [renderEnemyTile, setRenderEnemyTile] = useState([]); // the new tile mesh thing
  return (
    <RenderEnemyTileContext.Provider
      value={{
        renderEnemyTile,
        setRenderEnemyTile
      }}
    >
      {children}
    </RenderEnemyTileContext.Provider>
  );
};
