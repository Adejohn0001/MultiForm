import React from 'react'
import styled from 'styled-components'

const FormStyled = styled.div`
.label {
    width: 100%;
    font-size: 13px;
}
input {
    width:100%;
    color: #b9b9c1;
    padding: 0.4rem 0.7rem;
    font-weight:700;
}
div{
    margin: 1rem 0rem;
}
`
const Forms = () => {
  return (
    <FormStyled>
        <form action="">
            <div>
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" placeholder='e.g. Stephen King'/>
            </div>

            <div>
                <label htmlFor="email" className='label'>Email</label>
                <input type="email" placeholder='e.g. stephenking@lorem.com'/>
            </div>

            <div>
                <label htmlFor="name" className='label'> Phone Number </label>
                <input type="number" placeholder='e.g. +1 234 567 890'/>
            </div>
        </form>
    </FormStyled>
  )
}

export default Forms