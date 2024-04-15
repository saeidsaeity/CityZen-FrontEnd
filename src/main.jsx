import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BoardGameProvider } from './Context/BoardGameContext.jsx'
import { TileProvider } from './Context/TileContext.jsx'
import { TileMeshProvider } from './Context/TileMeshContext.jsx'
import { TileRotationProvider } from './Context/TileRotationContext.jsx'
import { TileDataProvider } from './Context/TileDataContext.jsx'
import { TileTypeProvider } from './Context/TileTypeContext.jsx'
import { StrictMode } from 'react';
import { BoardGameMatrixProvider } from './Context/BoardGameMatrixContext.jsx'
import { RenderEnemyTileProvider } from './Context/RenderEnemyTileContext.jsx'
import { ColourProvider } from './Context/ColourContext.jsx'

const container = document.getElementById('root');

const root = createRoot(container);
  root.render(
    <ColourProvider>
    <RenderEnemyTileProvider>
    <BoardGameMatrixProvider>
    <TileTypeProvider>
    <TileDataProvider>
    <TileRotationProvider>
    <TileMeshProvider>
    <TileProvider>
    <BoardGameProvider>
    <BrowserRouter>
    
        <App />
     
    </BrowserRouter>
    </BoardGameProvider>
    </TileProvider>
    </TileMeshProvider>
    </TileRotationProvider>
    </TileDataProvider>
    </TileTypeProvider>
    </BoardGameMatrixProvider>
    </RenderEnemyTileProvider>
    </ColourProvider>
  )

