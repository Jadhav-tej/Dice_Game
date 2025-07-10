import { useState } from "react"
import styled, { keyframes } from "styled-components"

const RoleDice = ({Current, roledice}) => {
  const [isRolling,setisRolling]= useState(false)
  function handleClick(){
    setisRolling(true)
      roledice();
      setTimeout(()=>setisRolling(false),500)
  
  }

  return (
    <Dicecontainer>

        <div className="dice" onClick={handleClick}> 
           
            <img className={isRolling?"rotate":""}
             src={`./images/dice_${Current}.png`} alt="" />
            
        </div>
        <p>
                Click on Dice to Roll
            </p>
      
    </Dicecontainer>
    
  )
}

export default RoleDice

const rotate=keyframes`
  0%{
    transform: rotate(0deg);
  }  
  100%{
    transform: rotate(360deg);
  }
`
const Dicecontainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    
    p{
        font-size: x-large;
        font-weight: 500;
    }
    img{
      width: 150px;
      height: 150px;
      transition:transform 0.5s ease ;
    }    
    
    .rotate{
      animation: ${rotate} 0.5s linear;
    }
`

// import { useState } from "react"
// import styled from "styled-components"

// const RoleDice = ({Current, roledice}) => {

//   return (
//     <Dicecontainer>

//         <div className="dice" onClick={roledice}> 
           
//             <img id="img" src={`./images/dice_${Current}.png`} alt="" />
            
//         </div>
//         <p>
//                 Click on Dice to Roll
//             </p>
      
//     </Dicecontainer>
    
//   )
// }

// export default RoleDice

// const Dicecontainer=styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 48px;
    
//     p{
//         font-size: x-large;
//         font-weight: 500;
//     }
    
// `
    
