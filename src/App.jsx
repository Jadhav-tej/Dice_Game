import styled from  "styled-components";
import Start_Game from "./components/Start_Game";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";
function App() {
  
const [isGameStarted, setIsGameStarted]= useState(false);

const toggleGame=()=>{
setIsGameStarted((isGameStarted)=>!isGameStarted);
}
  return (
    <>
{isGameStarted ? <GamePlay/> : <Start_Game toggle={toggleGame}/>}
   </>
  )
}

export default App
const Button = styled.button`
background-color:Black;
color:white;
`