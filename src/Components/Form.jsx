import React from 'react'
import Forms from './Forms'
import styled from 'styled-components'

const FormStyled = styled.div`
background-color: white;
margin: 5.35rem 1rem 0rem;
padding: 1rem 1rem;
border-radius: 10px;
.personal {
  font-size: 20px;
  font-weight: bolder;
}
.to-provide {
  margin-top: 1rem;
  color: #b9b9c1;
}

@media (min-width: 769px ){
  width: 600px;
  margin: 2.35rem 1rem 0rem;
  padding: 0rem 1rem;
}
`
const Form = () => {
  return (
    <FormStyled>
        <div>
            <p className='personal'>Personal info</p>
            <p className='to-provide'>Please provide your name, email, address, and phone number.</p>
        </div>

        <div>
            <Forms />
        </div>
    </FormStyled>
  )
}

export default Form