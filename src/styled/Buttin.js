import styled from "styled-components"
export const Button= styled.button`

background-color:black;
color: white;
padding:10px,18px;
gap:10px;
border-radius: 5px;
min-width: 190px;
border: none;
font-size: 13px;
border: 1px solid black;
transition: 0.4s background ease-out;
cursor: pointer;

&:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-out;

}

`
export const Outlinebtn= styled(Button)`
background-color: white;
color: black;
&:hover{
  background-color: black;
  color: white;
  border: 1px solid transparent;
  

}
`