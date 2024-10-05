
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>
        How play Dice Game
      </h2>
      <div className="text">

      <p>Select any number</p>
        <p>click on dice</p>
        <p> after click on the dice if selected number is equal to dice number you will get some points as dice</p>
        <p>if you get  wrong guess then 2 points will be deducted </p>
      </div>
      
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    max-width: 800px;
    margin-top: 40px;
    background-color: #fbf1f1;
    padding: 20px;
    margin: 0 auto;
    
    border-radius: 10px;
    h2{
        font-size: 24px;
    }
    .text{
        font-size: 24px;
    }
`