import * as THREE from "three";
import { tileChecks, tileColourLogic } from "../../../utils.js";
import { useGameEngine } from "../../Context/useGameEngine.jsx";
import { useContext } from "react";
import { BoardGameContext } from "../../Context/BoardGameContext.jsx";
import { myPlayer, RPC } from "playroomkit";
import useSound from "use-sound";
import { TileContext } from "../../Context/TileContext.jsx";
import { TileMeshContext } from "../../Context/TileMeshContext.jsx";
import { TileDataContext } from "../../Context/TileDataContext.jsx";
import { BoardGameMatrixContext } from "../../Context/BoardGameMatrixContext.jsx";
import { checkTilePlacement } from "../../Views/GameBoard/verifyFunctions.js";
import { ColourContext } from "../../Context/ColourContext.jsx";
import { SettingsContext } from "../../Context/SettingsContext.jsx";

export const GameBoardCells = () => {
  const {volume,SetVolume}= useContext(SettingsContext)
  const [sound] = useSound("drop.wav",{
    volume:volume/100
  });
  const [falling] = useSound("falling.mp3",{
    volume:volume/100
  });
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  const { setReleaseTile, setNewTile2DPosition,allowedTiles,
    setAllowedTiles } = useContext(TileContext);
  const { setNewTileData, newTileData } = useContext(TileDataContext);
  const { newTileMesh, setNewTileMesh } = useContext(TileMeshContext);
  const { beamColour, setBeamColour } = useContext(ColourContext);
 
  const {
    setNewTilePosition,

    turnPhase,
    
    players,
    playerTurn,
  } = useGameEngine();
  const { boardGameMatrix } = useContext(BoardGameMatrixContext);

  const player = players[playerTurn];
  const me = myPlayer();
  const grid = [];
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      // Create the tile
      const position = new THREE.Vector3(i, 0, j);
      function onClickEvent() {
        falling();
                    //setReleaseTile(!releaseTile);

                    tileChecks(
                      position.x,
                      position.z,
                      i,
                      j,
                      setReleaseTile,
                      setNewTilePosition,
                      setNewTile2DPosition,
                      tileSize,
                      newTileMesh,
                      setNewTileMesh
                    );
                    setNewTileData((currTileData) => {
                      const newtilepos = { ...currTileData };
                      newtilepos.grid_id = {
                        row: position.x + 5,
                        column: position.z + 5,
                      };
                      if (checkTilePlacement(newtilepos, boardGameMatrix)) {
                        setBeamColour("green");
                      } else if (
                        checkTilePlacement(
                          { ...newtilepos, orientation: 0 },
                          boardGameMatrix
                        ) ||
                        checkTilePlacement(
                          { ...newtilepos, orientation: 90 },
                          boardGameMatrix
                        ) ||
                        checkTilePlacement(
                          { ...newtilepos, orientation: 180 },
                          boardGameMatrix
                        ) ||
                        checkTilePlacement(
                          { ...newtilepos, orientation: 270 },
                          boardGameMatrix
                        )
                      ) {
                        setBeamColour("orange");
                      } else {
                        setBeamColour("red");
                      }

                      return newtilepos;
                    });
                    setTimeout(function () {
                      sound();
                    }, 1000);
        
      }
      let checks = true
      if(newTileData && me.id === player.id){
        
         checks = checkTilePlacement(
          { ...newTileData,grid_id:{row:i+5, column: j+5}, orientation: 0 },
          boardGameMatrix
        ) ||
        checkTilePlacement(
          { ...newTileData,grid_id:{row:i+5, column: j+5}, orientation: 90 },
          boardGameMatrix
        ) ||
        checkTilePlacement(
          { ...newTileData,grid_id:{row:i+5, column: j+5}, orientation: 180 },
          boardGameMatrix
        ) ||
        checkTilePlacement(
          { ...newTileData,grid_id:{row:i+5, column: j+5}, orientation: 270 },
          boardGameMatrix
        )
      }
      
      const tile = (
       
          <mesh
            key={`${i}-${j}-tile`}
            onClick={() => {
              if (newTileMesh) {
                if (me.id === player.id) {
                  if (turnPhase !== "Place Tile") {
                    console.log("You can not place during the citizen phase!");
                    return [];
                  }
                  if (i === -5 || j === -5) {
                    // board edge case
                    if (
                      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                      (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                        boardGameMatrix[i + 5][j + 6]?.length > 0 ||
                        boardGameMatrix[i + 5][j + 4]?.length > 0) && checks
                    ) {
                     onClickEvent()
                    }
                  } else if (
                    // selected a green tile
                    boardGameMatrix[i + 5][j + 5]?.length === 0 &&
                    (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
                      boardGameMatrix[i + 5][j + 4]?.length > 0 ||
                      boardGameMatrix[i + 6][j + 5]?.length > 0 ||
                      boardGameMatrix[i + 5][j + 6]?.length > 0)&&checks
                  ) {
                    onClickEvent()
                    
                  }
                }
              } else {
                console.log("please draw a tile");
              }
            }}
            position={[i * tileSize, 0.1, j * tileSize]}
            scale={tileScale}
          >
            <boxGeometry args={[tileSize, 0.01, tileSize]} />
            <meshPhongMaterial
              color={tileColourLogic(i, j, boardGameMatrix,turnPhase, checks)}
              transparent={true}
              opacity={0.5}
              receiveShadow
            />
          </mesh>
         
        
      );
      grid.push(tile);
    }
  }
  return grid;
};
