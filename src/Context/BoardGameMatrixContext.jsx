import { createContext, useState } from "react";
import { tileData } from "../Views/GameBoard/testboarddata";
export const BoardGameMatrixContext = createContext();

export const BoardGameMatrixProvider = ({ children }) => {
  //NEW TILE
  const [boardGameMatrix, setBoardGameMatrix] = useState( [
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [tileData], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], [], []],
]); // the new tile mesh thing
  return (
    <BoardGameMatrixContext.Provider
      value={{
       boardGameMatrix,
       setBoardGameMatrix
      }}
    >
      {children}
    </BoardGameMatrixContext.Provider>
  );
};
