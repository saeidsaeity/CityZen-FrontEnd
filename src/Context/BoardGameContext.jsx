import { createContext, useState } from "react";

export const BoardGameContext = createContext();
export const BoardGameProvider = ({ children }) => {

  //NEW TILE

  // Citizen
  const [citizenPosition, setCitizenPosition] = useState([]);
  const [isCitizenPhase, setIsCitizenPhase] = useState(false);
  const [showCitizen, setShowCitizen] = useState(true);
  const [citizenArray, setCitizenArray] = useState([]);
  const [releaseCitizen, setReleaseCitizen] = useState(true);
  const [otherPlayerTile,setOtherPlayerTile] = useState([])
  
  return (
    <BoardGameContext.Provider
      value={{
        citizenPosition,
        setCitizenPosition,
        isCitizenPhase,
        setIsCitizenPhase,
        showCitizen,
        setShowCitizen,
        citizenArray,
        setCitizenArray,
        releaseCitizen,
        setReleaseCitizen,
        setOtherPlayerTile,
        otherPlayerTile
       
      }}
    >
      {children}
    </BoardGameContext.Provider>
  );
};
