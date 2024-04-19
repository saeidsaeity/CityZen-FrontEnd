import { Suspense, useEffect, useState, useContext } from "react";
import { Merged, OrbitControls, PerformanceMonitor, Sky, Stars } from "@react-three/drei";

import { Canvas, useLoader } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useGameEngine } from "../../Context/useGameEngine.jsx";
import { myPlayer, RPC } from "playroomkit";
// Components
import { UI } from "../../components/Ui/UI.jsx";
import { GameBoardCells } from "../../components/GameBoardCells/GameBoardCells.jsx";
// 3D components
import { Citizen } from "../../assets/citizens/Citizen.jsx";
import TileD from "../../assets/tiles/tileD.jsx";
// styling
import styles from "./GameBoard.module.css";

import { BoardGameContext } from "../../Context/BoardGameContext.jsx";
import SpinnerLoader from "../../components/SpinnerLoader/SpinnerLoader.jsx";
import { useMemo } from "react";
import { TileContext } from "../../Context/TileContext.jsx";
import { TileMeshContext } from "../../Context/TileMeshContext.jsx";
import { TileRotationContext } from "../../Context/TileRotationContext.jsx";
import { TileDataContext } from "../../Context/TileDataContext.jsx";
import { BoardGameMatrixContext } from "../../Context/BoardGameMatrixContext.jsx";
import { RenderEnemyTileContext } from "../../Context/RenderEnemyTileContext.jsx";
import { randomTileGenerator } from "../../../utils.js";
import { TileTypeContext } from "../../Context/TileTypeContext.jsx";
import { ColourContext } from "../../Context/ColourContext.jsx";
import Mountain from "../../assets/environment/Mountain.jsx";
import Tree from "../../assets/environment/Tree.jsx"
import { TextureLoader } from "three";
import { useNavigate } from "react-router-dom";
import { checkTilePlacement } from "./verifyFunctions.js";



const GameBoard = () => {
  // TILE
  const navigate = useNavigate()
  const [enableRotate, setEnableRotate] = useState(true);
  const [sunPosition, setSunPosition] = useState([50, -6, 150]);
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  const {
    citizenPosition,
    isCitizenPhase,
    showCitizen,
    citizenArray,
    setCitizenArray,
    setReleaseCitizen,
    setShowCitizen,
    setOtherPlayerTile,
    otherPlayerTile,
  } = useContext(BoardGameContext);
  const {
    setNewTile2DPosition,
    releaseTile,
    setReleaseTile,
    renderTileArr,
    setRenderTileArr,
    setShowTile,
    replaceTile,
    setReplaceTile,
    
  } = useContext(TileContext);
  const { renderEnemyTile, setRenderEnemyTile } = useContext(
    RenderEnemyTileContext
  );
  const { newTileMesh, setNewTileMesh } = useContext(TileMeshContext);
  const { tileRotation } = useContext(TileRotationContext);
  const { setNewTileData, newTileData } = useContext(TileDataContext);
  const { setBoardGameMatrix } = useContext(BoardGameMatrixContext);
  const { setNewTileType } = useContext(TileTypeContext);
  const { beamColour, setBeamColour } = useContext(ColourContext);
  const [tempCitizen, setTempCitizen] = useState([]);
  const{boardGameMatrix}= useContext(BoardGameMatrixContext)
  const[unavailabeTileType,setUnavailabeTileType]=useState([])

  // STATES //
  // CAMERA & ENVIRONMENT
  const {
    turnPhase,
    newTilePosition,
    gameTileCount,
    players,
    playerTurn,
    endgame,
    setEndgame
  } = useGameEngine();
  const [colorMap, displacementMap, roughnessMap] = useLoader(TextureLoader, [
    "aerial_grass_rock_diff_4k.jpg",
    "aerial_grass_rock_disp_4k.png",
    "aerial_grass_rock_rough_4k.jpg",
  ]);
  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(
      `../../assets/tiles/tile${tileType}.jsx`
    );
    const renderNewTile = (
      <RigidBody
        key={tileType + "," + newTilePosition}
        canSleep={true}
        position={newTilePosition}
        rotation={[0, tileRotation, 0]}
        restitution={0}
        enabledTranslations={[false, true, false]}
        enabledRotations={[false, false, false]}
      >
        <TileComponent.default scale={tileScale} />
      </RigidBody>
    );
    // console.log(renderNewTile, "DRAW NEWT TILE");
    setNewTileMesh(renderNewTile);

    return renderNewTile;
  };

  const getRenderTileMesh = async (tileType, position, rotation) => {
    if (tileType !== undefined) {
      const TileComponent = await import(
        `../../assets/tiles/tile${tileType}.jsx`
      );
      const renderNewTile = (
        <RigidBody
          canSleep={false}
          position={position}
          rotation={[0, -rotation, 0]}
          scale={tileScale}
          restitution={0}
          enabledTranslations={[false, true, false]}
          enabledRotations={[false, false, false]}
          key={tileType + "," + position}
        >
          <TileComponent.default />
        </RigidBody>
      );
      // console.log(renderNewTile,'i am here');
      // console.log(renderNewTile, "RENDER NEW TILE");
      return renderNewTile;
    }
  };

  const renderCitizen = async (position, colour) => {
    const citizenComp = (
      <RigidBody
        key={position}
        gravityScale={0.5}
        position={position}
        scale={0.095}
        friction={100}
        mass={1000}
        rotation={[0, 0, 0]}
        canSleep={true}
        lockRotations={true}
        restitution={0}
      >
        <Citizen color={colour} />
      </RigidBody>
    );
    return citizenComp;
  };

  const me = myPlayer();
  
  
  useEffect(() => {
    if(me===undefined){
      navigate('/')
    }
    RPC.register("tile", (data, caller) => {
      const splitkey = data.key.split("");

      getRenderTileMesh(
        splitkey[0],
        data.props.position,
        -data.props.rotation[1]
      ).then((tileMesh) => {
        setRenderTileArr((currArray) => {
          if (
            currArray.some((tile) => {
              return tile.key === splitkey[0] + "," + data.props.position;
            })
          ) {
            return currArray;
          }
          return [...currArray, tileMesh];
        });
      });
      setRenderEnemyTile(null);
      // console.log(renderTileArr);
    });

    RPC.register("citizen", (data, caller) => {
      console.log(data);
      renderCitizen(data.position, data.colour).then((newcitizen) => {
        setCitizenArray((currArray) => {
          currArray.some((citizen) => {
            {
              return (
                citizen.key ===
                data.position[0] +
                  "," +
                  data.position[1] +
                  "," +
                  data.position[2]
              );
            }
          });

          if (
            currArray.some((citizen) => {
              return (
                JSON.stringify(citizen.props.position) ===
                JSON.stringify(data.position)
              );
            })
          ) {
            return [...new Set(currArray)];
          } else {
            const newArray = [...currArray, newcitizen];
            return [...new Set(newArray)];
          }
        });
        setReleaseCitizen(false);
      });
      setTempCitizen(null);
    });

    setShowCitizen(false);

    RPC.register("confirmMatrix", (data, caller) => {
      setBoardGameMatrix((currBoard) => {
        const newerBoard = JSON.parse(JSON.stringify(currBoard));
        newerBoard[data.pos1][data.pos2] = [newTileData];

        return newerBoard;
      });
    });
    RPC.register("confirmCitizen", (data, caller) => {
      setBoardGameMatrix(data);
    });

    RPC.register("enemyTile", (data, caller) => {
      // console.log(data);
      // console.log(data.pos);
      // console.log(data.newTileMesh);
      const TileTypeEnemy = data.key.split("");
      getRenderTileMesh(
        TileTypeEnemy[0],
        data.props.position,
        -data.props.rotation[1]
      ).then((outputtile) => {
      
        setRenderEnemyTile(outputtile);
      });
    });
    RPC.register("showCitizen", (data, caller) => {
      renderCitizen(data.position, data.colour).then((citiz) =>
        setTempCitizen(citiz)
      );
    });
   
  }, []);

  //console.log(renderEnemyTile);
  const player = players[playerTurn];
  // console.log(otherPlayerTile);
  // console.log(newTileMesh);
  // console.log(me);
  // RENDERING STARTS HERE //
  // console.log(me.id !== player.id );
  // console.log(renderEnemyTile);
  // console.log(releaseTile)
  //   console.log(replaceTile);
  console.log("here");
  // console.log(newTilePosition);
function checkIfTileCanBePlaced(params) {
  const allowedTiles=[]
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
  if (i === -5 || j === -5) {
    if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0 ||
        boardGameMatrix[i + 5][j + 4]?.length > 0)
    ) {
      allowedTiles.push([i+5,j+5])
    }
  } else if (
    boardGameMatrix[i + 5][j + 5]?.length === 0 &&
    (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
      boardGameMatrix[i + 5][j + 4]?.length > 0 ||
      boardGameMatrix[i + 6][j + 5]?.length > 0 ||
      boardGameMatrix[i + 5][j + 6]?.length > 0)
  ) {
    
    allowedTiles.push([i+5,j+5])
  }
}
  }
  return allowedTiles
}
function tileRequest(oldTile) {
  if(me){
    if (turnPhase === "Place Tile" && me.id === player.id){
     
      
      const allowedTiles = checkIfTileCanBePlaced()
      // console.log(allowedTiles);
      setReleaseTile(false);
      setShowTile(false);
    
      randomTileGenerator(gameTileCount,oldTile).then((randomTile) => {
        if(randomTile === null){
          setEndgame(true)
        }
        else{
          if(!allowedTiles.some((allowedTile)=>{
            const checkdata = JSON.parse(JSON.stringify(randomTile))
            checkdata.grid_id = {
              row: allowedTile[0],
              column: allowedTile[1],
            };
  
            return checkTilePlacement({...checkdata,orientation: 0},boardGameMatrix) ||checkTilePlacement({...checkdata,orientation: 90 },boardGameMatrix)|| checkTilePlacement({...checkdata,orientation: 180},boardGameMatrix) ||checkTilePlacement({...checkdata,orientation: 270 },boardGameMatrix)
          })){
            setUnavailabeTileType((currArray)=>{
              tileRequest([...currArray,randomTile.tile_type])
              return [...currArray,randomTile.tile_type]
            })
           
            console.log('no where to place');
          }
          setUnavailabeTileType([])
        setNewTileData(randomTile);
        drawEventHandler(randomTile.tile_type);
        // RPC.call('enemyTile',tileOutput,RPC.Mode.ALL)
        setNewTileType(randomTile.tile_type);
        setShowTile(true);
        setReplaceTile(true);
        
        }
      })
    }
  }
  
}
  useEffect(() => {
    tileRequest()
  }, [turnPhase]);
  
  

  if(endgame){
    console.log(players);
    players.sort((a,b)=>{
      if (a.state.score<b.state.score) {
        return 1;
      } else if (a.state.score>b.state.score) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  
   
    return(
      <>
      <p className={styles.gameOver}>Game Over</p>
      {players.map((player, index) => {
        console.log(index);
        return (
          <div
            key={index}
            style={{ backgroundColor: player.state.profile.color }}
            className={styles.eachPlayer}
          >
            <img src={player.state.profile.photo} className={styles.playerImg} />
            <p className={styles.playerName}>{player.state.profile.name}</p>
            <p className={styles.score}>Score: {player.state.score}</p>
            {index===0?<p className={styles.winner}>Winner</p>: null}
          </div>
        );
      })}
      </>
    )
  }
  const [dpr, setDpr] = useState(1.5)
console.log(renderTileArr,'the array of things');
  if(me){
  return (
    <>
      <UI drawEventHandler={drawEventHandler} />

      <div className={styles.gameBoard}>
        <Suspense fallback={<SpinnerLoader />}>
          <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }} dpr={dpr}>
          <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} >
            <Physics>
              <ambientLight intensity={2} />
              <Sky distance={1000} sunPosition={[5, 5, 5]} />

              {/* <Stars factor={2.5} /> */}

              <directionalLight
                castShadow
                intensity={2}
                position={[50, 50, 100]}
                shadow-normalBias={0.03}
              />

              <directionalLight
                castShadow
                intensity={5}
                position={sunPosition}
                shadow-normalBias={0.03}
              />

              <OrbitControls
                minDistance={2}
                maxDistance={30}
                enableRotate={enableRotate}
                maxPolarAngle={Math.PI / 2 - 0.1}
                // dampingFactor={0.8}
                rotateSpeed={0.6}
                target={[0, 2.25, 0]}
              />

              <RigidBody
                position={[0, 4, 0]}
                scale={tileScale}
                restitution={0}
                enabledTranslations={[false, true, false]}
                enabledRotations={[false, false, false]}
              >
                <TileD />
              </RigidBody>

              <GameBoardCells />

              {releaseTile && replaceTile ? newTileMesh : null}
              {me.id !== player.id ? tempCitizen : null}
              {me.id !== player.id ? renderEnemyTile : null}
              {turnPhase === "Place Citizen" &&
              citizenPosition.length > 0 &&
              showCitizen &&
              me ? (
                <RigidBody
                  key="visibleCitizen"
                  gravityScale={0.5}
                  position={citizenPosition}
                  scale={0.095}
                  friction={100}
                  mass={1000}
                  rotation={[0, 0, 0]}
                  canSleep={true}
                  lockRotations={true}
                  restitution={0}
                >
                  <Citizen color={me.state.profile.color} />
                </RigidBody>
              ) : null}
              {/* {otherPlayerTile ?  renderEnemyTile :null} */}
              <group>{renderTileArr}</group>
              {/* <Merged meshes={renderTileArr.filter(tile => tile)}>
  {(TileComponent) => (
    <>
      {renderTileArr.map((tile, index) => (
        <TileComponent key={index} />
      ))}
    </>
  )}
</Merged> */}

              {citizenArray}
              <RigidBody type="fixed">
                <mesh receiveShadow position-y={-0.5}>
                  <boxGeometry args={[50, 0.00001, 80]} />
                  <meshStandardMaterial
                    map={colorMap}
                    displacementMap={displacementMap}
                    roughnessMap={roughnessMap}
                  />
                </mesh>
              </RigidBody>
              <RigidBody type="fixed">
                <mesh receiveShadow position-y={0}>
                  <boxGeometry args={[50, 0.2, 80]} />
                  <meshStandardMaterial transparent opacity={0} />
                </mesh>
              </RigidBody>
            </Physics>
            {newTilePosition && turnPhase === "Place Tile" ? (
              <mesh position={newTilePosition}>
                <boxGeometry args={[2, 10, 2]} />
                <meshBasicMaterial
                  color={beamColour || player.state.profile.color}
                  transparent
                  opacity={0.4}
                />
              </mesh>
            ) : null}
            <Mountain scale={[0.05, 0.05, 0.05]} position={[30, -1, 10]} />
            <Mountain scale={[0.05, 0.05, 0.05]} position={[30, -1, -15]} />
            <Mountain
              scale={[0.05, 0.05, 0.05]}
              position={[0, -1, -40]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <Mountain
              scale={[0.05, 0.05, 0.05]}
              position={[-30, -1, -15]}
              rotation={[0, -Math.PI, 0]}
            />
            <Mountain
              scale={[0.05, 0.05, 0.05]}
              position={[-30, -1, 10]}
              rotation={[0, -Math.PI, 0]}
            />
            <Mountain
              scale={[0.05, 0.05, 0.05]}
              position={[0, -1, 40]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <Tree scale={[5,5,5]} position={[15,0,0]}/>
            <Tree scale={[5,5,5]} position={[0,0,15]}/>
            <Tree scale={[5,5,5]} position={[-4,0,15]} rotation={[0,-Math.PI / 2, 0]}/>
            <Tree scale={[5,5,5]} position={[0,0,-16]}/>
            <Tree scale={[5,5,5]} position={[-4,0,-16]} rotation={[0,-Math.PI / 2, 0]}/>
            <Tree scale={[5,5,5]} position={[8,0,-16]}/>
            <Tree scale={[5,5,5]} position={[8,0,-16]} rotation={[0,-Math.PI / 2, 0]}/>
            {/* HELPERS */}
            {/* <Perf position="top-left" /> */}
            {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} /> */}
          </PerformanceMonitor>
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
else{
 
    navigate("/");
  
  
}
};

export default GameBoard;
