import { Suspense, useEffect, useState } from 'react';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useGameEngine } from '../../Context/useGameEngine.jsx';
import { myPlayer } from 'playroomkit';
// Components
import { UI } from '../../components/Ui/UI.jsx';
import { GameBoardCells } from '../../components/GameBoardCells/GameBoardCells.jsx';
// 3D components
import { Citizen } from '../../assets/citizens/Citizen.jsx';
import TileD from '../../assets/tiles/tileD.jsx';
// styling
import styles from './GameBoard.module.css';
import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader.jsx';

const GameBoard = () => {
  // TILE
  const tileScale = [0.92, 0.92, 0.92];
  const tileSize = 2;
  // STATES //
  // CAMERA & ENVIRONMENT
  const [enableRotate, setEnableRotate] = useState(true);
  const [sunPosition, setSunPosition] = useState([-50, 0, 250]);
  //NEW TILE
  const [newTileMesh, setNewTileMesh] = useState(); // the new tile mesh thing
  const [newTileData, setNewTileData] = useState(); //the new tile object
  const [newTileType, setNewTileType] = useState(); // string of tile type
  const [newTilePosition, setNewTilePosition] = useState([12, 4, 0]); //updates the postion
  const [newTile2DPosition, setNewTile2DPosition] = useState([]); //updates the 2D tile position
  const [releaseTile, setReleaseTile] = useState(false); //makes it so you cant click after confirm
  const [tileRotation, setTileRotation] = useState(0); // sets tile rotation
  const [renderTileArr, setRenderTileArr] = useState([]); // renders 3D models to canvas
  // Citizen
  const [citizenPosition, setCitizenPosition] = useState([]);
  const [isCitizenPhase, setIsCitizenPhase] = useState(false);
  const [replaceTile, setReplaceTile] = useState(true);
  const [showCitizen, setShowCitizen] = useState(true);

  // functions
  const drawEventHandler = async (tileType) => {
    const TileComponent = await import(
      `../../assets/tiles/tile${tileType}.jsx`
    );
    const renderNewTile = (
      <RigidBody
        key={tileType + ',' + newTilePosition}
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
          key={tileType + ',' + position}
        >
          <TileComponent.default />
        </RigidBody>
      );
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

  const {
    turnPhase,
    boardGameMatrix
  } = useGameEngine();

  const me = myPlayer();
  const [citizenArray, setCitizenArray] = useState([]);
  const [releaseCitizen, setReleaseCitizen] = useState(true);
  useEffect(() => {
    // setting rendered tile array
    setReleaseCitizen(false);
    setCitizenArray([]);
    setRenderTileArr([]);
    boardGameMatrix.forEach((row) => {
      row.forEach((col) => {
        // A tile exists in Matrix cell
        if (col.length > 0) {
          // only render non-starting tile
          if (col[0]._id) {
            const position = [
              (col[0].grid_id.row - 5) * 2,
              0,
              (col[0].grid_id.column - 5) * 2,
            ];

            if (col[0].citizen.is_citizen) {
              renderCitizen(
                col[0].citizen.position,
                col[0].citizen.colour
              ).then((newcitizen) => {
                setCitizenArray((currArray) => {
                  return [...currArray, newcitizen];
                });
                setReleaseCitizen(true);
              });
            }
            getRenderTileMesh( col[0].tile_type, position, (col[0].orientation * Math.PI) / 180 )
              .then((tileMesh) => {
                setRenderTileArr((currArray) => {
                  return [...currArray, tileMesh];
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      });
    });
  }, [boardGameMatrix]);

  // RENDERING STARTS HERE //
  return (
    <>
      <UI
        drawEventHandler={drawEventHandler}
        newTileType={newTileType}
        setNewTileType={setNewTileType}
        newTileMesh={newTileMesh}
        setNewTileMesh={setNewTileMesh}
        tileRotation={tileRotation}
        setTileRotation={setTileRotation}
        newTileData={newTileData}
        setNewTileData={setNewTileData}
        newTile2DPosition={newTile2DPosition}
        setReleaseTile={setReleaseTile}
        replaceTile={replaceTile}
        setReplaceTile={setReplaceTile}
        citizenPosition={citizenPosition}
        setCitizenPosition={setCitizenPosition}
        setCitizenArray={setCitizenArray}
        setShowCitizen={setShowCitizen}
      />

      <div className={styles.gameBoard}>
        <Suspense fallback={<SpinnerLoader />}>

        
        <Canvas shadows camera={{ fov: 70, position: [0, 8, 14] }}>

          <Physics>
            <ambientLight intensity={1.2} />
            <Sky
              sunPosition={sunPosition}
              distance={50000}
                  inclination={10}
                  azimuth={0.5}
                  turbidity={0.5}
                  rayleigh={10}
                  mieDirectionalG={0.01}
                  mieCoefficient={0.005}
            />

            <Stars factor={2.5} />

            <directionalLight
              castShadow
              intensity={1.5}
              position={[50, 50, 150]}
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

            <GameBoardCells
              boardGameMatrix={boardGameMatrix}
              tileSize={tileSize}
              tileScale={tileScale}
              setReleaseTile={setReleaseTile}
              setNewTilePosition={setNewTilePosition}
              setNewTile2DPosition={setNewTile2DPosition}
              setNewTileMesh={setNewTileMesh}
              setNewTileData={setNewTileData}
              turnPhase={turnPhase}
              isCitizenPhase={isCitizenPhase}
            />

            {console.log(newTileMesh, "MESH")}

            {releaseTile && replaceTile ? newTileMesh : null}

            {turnPhase === 'Place Citizen' &&
            citizenPosition.length > 0 &&
            showCitizen &&
            me ? (
              <RigidBody
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

            {renderTileArr}
            {releaseCitizen ? citizenArray : null}
            <RigidBody type="fixed">
              <mesh receiveShadow position-y={-0.3}>
                <boxGeometry args={[22, 0.5, 22]} />
                <meshStandardMaterial color="#8f4111" />
              </mesh>
            </RigidBody>
          </Physics>

          {/* HELPERS */}
          {/* <Perf position="top-left" /> */}
          {/* <axesHelper args={[5]} />
          <gridHelper args={[50, 25, "black", "red"]} /> */}
        </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default GameBoard;
