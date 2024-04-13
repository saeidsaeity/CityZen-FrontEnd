import { createContext, useState } from "react";
export const TileContext = createContext();

export const TileProvider = ({ children }) => {
  //NEW TILE
  const [newTileData, setNewTileData] = useState(); //the new tile object
  const [newTileType, setNewTileType] = useState(); // string of tile type
  const [newTilePosition, setNewTilePosition] = useState([]); //updates the postion

  const [newTile2DPosition, setNewTile2DPosition] = useState([]); //updates the 2D tile position
  const [releaseTile, setReleaseTile] = useState(false); //makes it so you cant click after confirm
  const [tileRotation, setTileRotation] = useState(0); // sets tile rotation
  const [renderTileArr, setRenderTileArr] = useState([]); // renders 3D models to canvas
  const [replaceTile, setReplaceTile] = useState(true);
  const [showTile, setShowTile] = useState(false);
  
  return (
    <TileContext.Provider
      value={{
        newTile2DPosition,
        setNewTile2DPosition,
        releaseTile,
        setReleaseTile,
        renderTileArr,
        setRenderTileArr,
        replaceTile,
        setReplaceTile,
        showTile,
        setShowTile,
        newTilePosition,
        setNewTilePosition
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
