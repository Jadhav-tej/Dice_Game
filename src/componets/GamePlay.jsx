import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberScore from './NumberScore'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button } from '../styled/Buttin'
import { Outlinebtn } from '../styled/Buttin'
import Rules from './Rules'


function GamePlay() {
  const [Score ,setScore]=useState(0)
  const [selectNumber,setselectNumber]= useState(false)
  const [Current,setCurrent]=useState(1)
  const [error,setError]= useState("")
  const [showRules,setshowrules]=useState(false)
  const generateRandomNumber=(min,max)=>{
    
    return Math.floor(Math.random()*(max-min)+min);
}

const roledice=()=>{
  if(!selectNumber) {
   setError("You have not selected any number")
    return;
  }
  
    const randomNumber=generateRandomNumber(1,7)
    setCurrent(Current=>randomNumber)
    if(selectNumber==randomNumber){
      setScore(Current=>Current+2)
    }
    else{
      setScore(Current=> Current-1)
    }
    setselectNumber(undefined)
}

const Resetbutton=()=>{
  setScore(0)
}
  

  return (
    <Maincontainer>

    <div className="top_section">
     <TotalScore Score={Score}/>
     <NumberScore  setError={setError} error={error} selectNumber={selectNumber}
     setselectNumber={setselectNumber}/>
     
    </div>
    <RoleDice Current={Current}  roledice={ roledice}/>
     <div className="btns">
      <Outlinebtn 
      onClick={Resetbutton}
      >Reset</ Outlinebtn>
      <Button
      onClick={()=>{setshowrules(showRules=>!showRules)}}>
      {showRules ? "Hide ": "Show "}
      Rules </Button>


     </div>
      {showRules && <Rules/>}
     
    </Maincontainer>
  )
}

export default GamePlay
const Maincontainer=styled.div`
  background-color: aquamarine;
   .top_section{
       display: flex;
       justify-content: space-between;
    }
    .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

`