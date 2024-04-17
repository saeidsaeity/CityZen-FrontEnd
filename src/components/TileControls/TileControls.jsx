import React, { useContext } from "react";
import { myPlayer, RPC } from "playroomkit";
import { useGameEngine } from "../../Context/useGameEngine";
import { randomTileGenerator } from "../../../utils.js";
import styles from "./TileControls.module.css";
import { BoardGameContext } from "../../Context/BoardGameContext";
import { checkTilePlacement } from "../../Views/GameBoard/verifyFunctions";
import useSound from "use-sound";
import { useEffect } from "react";
import { TileContext } from "../../Context/TileContext.jsx";
import { RigidBody } from "@react-three/rapier";
import { TileRotationContext } from "../../Context/TileRotationContext.jsx";
import { TileMeshContext } from "../../Context/TileMeshContext.jsx";
import { tileData } from "../../Views/GameBoard/testboarddata.js";
import { TileDataContext } from "../../Context/TileDataContext.jsx";
import { TileTypeContext } from "../../Context/TileTypeContext.jsx";
import { BoardGameMatrixContext } from "../../Context/BoardGameMatrixContext.jsx";
import { ColourContext } from "../../Context/ColourContext.jsx";
import { SettingsContext } from "../../Context/SettingsContext.jsx";
function TileControls({ drawEventHandler }) {
 const {
    setReleaseTile,
    showTile,
    setShowTile,
    setReplaceTile,
    newTile2DPosition,
    renderEnemyTile,
    setRenderEnemyTile,
setRenderTileArr}= useContext(TileContext)
    const {newTileData,setNewTileData}=useContext(TileDataContext)
    const {setTileRotation,tileRotation} = useContext(TileRotationContext)
    const {newTileMesh,setNewTileMesh}=useContext(TileMeshContext)
    const {setNewTileType}= useContext(TileTypeContext)
    const {setBeamColour}=useContext(ColourContext)
    const {volume,Setvolume}= useContext(SettingsContext)
    const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  const {
    playerTurn,
    players,
    phaseEnd,
    gameTileCount,
    setNewTilePosition,
    newTilePosition,
    setGameTileCount


  } = useGameEngine();
  const { boardGameMatrix,
    setBoardGameMatrix}= useContext(BoardGameMatrixContext)
  const me = myPlayer();
  const [playSound] = useSound("confirm.mp3",{
    volume:volume/100
  });
  
  const rotateTileHandler = () => {
    setTileRotation((currRotation) => {
      if (currRotation <= -2 * Math.PI) {
        return currRotation + 1.5 * Math.PI;
      }
      return currRotation - Math.PI / 2;
    });
    setNewTileData((currTileData)=>{
      const newrotationtile = {...currTileData}
      newrotationtile.orientation =
      ((tileRotation - Math.PI / 2) * -1 * (180 / Math.PI)) % 360;
      console.log(newrotationtile);
      if (checkTilePlacement(newrotationtile, boardGameMatrix)) {
        setBeamColour('green')
      }
      else if(checkTilePlacement({...currTileData,orientation:0}, boardGameMatrix)||checkTilePlacement({...currTileData,orientation:90}, boardGameMatrix)|| checkTilePlacement({...currTileData,orientation:180}, boardGameMatrix)|| checkTilePlacement({...currTileData,orientation:270}, boardGameMatrix)){
        setBeamColour('orange')
      }
      else{
        setBeamColour('red')
      }
      return newrotationtile

    })
    // newTileData.orientation =
    //   ((tileRotation - Math.PI / 2) * -1 * (180 / Math.PI)) % 360;
    setNewTileMesh((currTile) => {
      if (currTile === undefined) {
        return currTile;
      }
      const updatedTile = {
        ...currTile,
        props: {
          ...currTile.props,
          rotation: [0, tileRotation - Math.PI / 2, 0],
        },
      };
      RPC.call("enemyTile",  updatedTile , RPC.Mode.ALL);
      return updatedTile;
    });
  };

  const confirmTileHandler = () => {
    if(!newTilePosition){
      return null
    }
    if (checkTilePlacement(newTileData, boardGameMatrix)) {
      setReplaceTile(false);
     
    
      RPC.call("tile", newTileMesh, RPC.Mode.ALL);
      RPC.call("confirmMatrix",{pos1:newTile2DPosition[0],pos2:newTile2DPosition[1]},RPC.Mode.ALL)
      console.log(newTileData.tile_type);
        gameTileCount.splice(gameTileCount.indexOf(newTileData.tile_type),1)
        setGameTileCount(gameTileCount)
      setNewTileMesh(null);
      setReleaseTile(false);
      setNewTilePosition(null)
      playSound();
      phaseEnd();
    } else {
      console.log("tile can not be placed there");
      alert(
        "You can not place that tile there, find another location or draw a new tile"
      );
    }
  };

  return (
    <>
      <button
        onClick={rotateTileHandler}
        style={{ backgroundColor: me.state.profile.color }}
        className={styles.button}
      >
        Rotate
      </button>

      <button
        style={{ backgroundColor: me.state.profile.color }}
        className={styles.button}
        onClick={async () => {
          setReleaseTile(false);
          setShowTile(false);
          const randomTile = await randomTileGenerator(gameTileCount);
          
          setNewTileData(randomTile);
         drawEventHandler(randomTile.tile_type);
          // RPC.call('enemyTile',tileOutput,RPC.Mode.ALL)
          setNewTileType(randomTile.tile_type);
          setShowTile(true);
          setReplaceTile(true);
        }}
      >
        {showTile ? "Take a new tile" : "Draw a tile"}
      </button>

      <button
        style={{ backgroundColor: me.state.profile.color }}
        className={styles.button}
        onClick={confirmTileHandler}
      >
        Confirm
      </button>
    </>
  );
}

export default TileControls;
