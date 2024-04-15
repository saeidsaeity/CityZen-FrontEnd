import { useGameEngine } from "./src/Context/useGameEngine";
import { getTile } from "./src/api";
import { myPlayer, RPC } from "playroomkit";

export const randomTileGenerator = async (gameTileCount) => {
  const randInt = Math.floor(Math.random() * 23 + 1);
  const tileType = String.fromCharCode(randInt + 64);
  const tilesRemaining = gameTileCount[tileType];

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
    if (isCitizenPhase === true) return 0xc3c3c3;
    else return 0x32cd32;
  } else {
    if (isCitizenPhase === false) return 0xc3c3c3;
    else return 0xc3c3c3;
  }
};
