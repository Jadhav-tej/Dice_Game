import { useState } from "react"
import styled from "styled-components"

const NumberScore = ({setError,error, selectNumber,setselectNumber} ) => {
 const arrNumber=[1,2,3,4,5,6]
 
 
 const numberSelectorHandler=(value)=>{
    setselectNumber(value)
    setError(" ")
 }
 return (
    <Container>
        <p className="error">{error}</p>
<div className="flex"> 
        {
            arrNumber.map( (value,i)=>(
                <Box 
                isselected={value==selectNumber}
                key={i}
                onClick={()=>numberSelectorHandler(value)} >
               
                  {value}
            
            </Box> ) )
            
        }
        
        </div>
        <p>Select Number</p>
    </Container>
    
  )
}

export default NumberScore

const Container=styled.div`

display: flex;
flex-direction: column;
align-items: end;

    .flex{
        display: flex;
       gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
        
    }
    .error{
        color: red;
    }
   
`;

const Box=styled.div`
border: 1px solid black;
height: 72px;
width: 72px;
display: grid;
place-items: center;
font: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isselected ? 'black':'white')};
color: ${(props)=>(props.isselected ? 'white':'black')};
border-radius: 15px;

`
