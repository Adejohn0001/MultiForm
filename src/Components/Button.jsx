import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
background-color:white;
margin-top: 7.7rem;
padding: 1.3rem 1.3rem 1.3rem;
display:flex;
justify-content: flex-end;
align-items: flex-end;

button{
    background-color: #032958;
    border: none;
    color: white;
    padding: 0.7rem;
    border-radius:5px;
}

@media (min-width: 576px){
  background-color:transparent;
margin-top: -3rem;
padding: 2rem 1.3rem 0rem;
display:flex;
margin-right:3.5rem;
justify-content: flex-end;
align-items: flex-end;  
}
`
const Button = () => {
  return (
    <ButtonStyled>
        <button>Next Step</button>
    </ButtonStyled>
  )
}

export default Button