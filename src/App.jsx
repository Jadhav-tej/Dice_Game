import styled from  "styled-components";
import StartGame from "./components/StartGame";
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
{isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGame}/>}
   </>
  )
}

export default App
const Button = styled.button`
background-color:Black;
color:white;
`