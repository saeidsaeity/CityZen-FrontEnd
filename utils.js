import { useContext } from "react";
import { useGameEngine } from "./src/Context/useGameEngine";
import { getTile } from "./src/api";
import { myPlayer, RPC } from "playroomkit";
import { TileContext } from "./src/Context/TileContext";
import { TileDataContext } from "./src/Context/TileDataContext";
import { checkTilePlacement } from "./src/Views/GameBoard/verifyFunctions";

export const randomTileGenerator = async (gameTileCount, unavailableTileType) => {
  
  const randInt = Math.floor(Math.random() * gameTileCount.length);
  const tileType = gameTileCount[randInt];
  console.log(gameTileCount);
  console.log(unavailableTileType);
  if(unavailableTileType?.includes(tileType)){
   const uniq = [...new Set(gameTileCount)];
   console.log(uniq);
   if(JSON.stringify(uniq.sort())===JSON.stringify(unavailableTileType.sort())){
    return null
   }
    randomTileGenerator()
  }
  if(gameTileCount.length===0){
    console.log('here');
    return null
  }
  const randomTile = { ...(await import(`./src/data/TileType${tileType}.js`)) };

  randomTile.default.key = randomTile.default._id;
  return randomTile.default;
};

export const tileChecks = (
  x,
  z,
  i,
  j,
  setReleaseTile,
  setNewTilePosition,
  setNewTile2DPosition,
  tileSize,
  newTileMesh,
  setNewTileMesh
) => {
  setReleaseTile(true);
  setNewTilePosition([x * tileSize, 4, z * tileSize]);
  
  console.log(newTileMesh);
  setNewTileMesh((currTile) => {
    if (currTile === undefined) {
      return currTile;
    }
    const updatedTile = {
      ...currTile,
      props: {
        ...currTile.props,
        position: [x * tileSize, 4, z * tileSize],
      },
    };
    console.log(updatedTile);
    RPC.call("enemyTile", updatedTile, RPC.Mode.ALL);
    return updatedTile;
  });

  setNewTile2DPosition([i + 5, j + 5]);
};

export const tileColourLogic = (i, j, boardGameMatrix, isCitizenPhase) => {
  const{allowedTiles,setAllowedTiles}=useContext(TileContext)
  const { setNewTileData, newTileData } = useContext(TileDataContext);
  console.log( { ...newTileData,grid_id:{row:i+5,column:j+5} , orientation: 0 });
  if (i === -5 || j === -5) {
    if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0 ||
        boardGameMatrix[i + 5][j + 4]?.length > 0) 
    ) {
     
      return 0x32cd32;
    } else {
      return 0xc3c3c3;
    }
  } else if (
    boardGameMatrix[i + 5][j + 5]?.length === 0 &&
    (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
      boardGameMatrix[i + 5][j + 4]?.length > 0 ||
      boardGameMatrix[i + 6][j + 5]?.length > 0 ||
      boardGameMatrix[i + 5][j + 6]?.length > 0)
  ) {
    
    if (isCitizenPhase === true) {
      return 0xc3c3c3;}
    else {
      
      
      return 0x32cd32}
  } else {
    if (isCitizenPhase === false) return 0xc3c3c3;
    else return 0xc3c3c3;
  }
};
