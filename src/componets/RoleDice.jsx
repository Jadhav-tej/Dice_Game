import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({Current, roledice}) => {

   

  return (
    <Dicecontainer>

        <div className="dice" onClick={roledice}> 
           
            <img src={`./images/dice_${Current}.png`} alt="" />
            
        </div>
        <p>
                Click on Dice to Roll
            </p>
      
    </Dicecontainer>
    
  )
}

export default RoleDice

const Dicecontainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    p{
        font-size: x-large;
        font-weight: 500;
    }
`
    
