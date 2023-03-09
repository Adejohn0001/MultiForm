import React from 'react'
import SelectContainer1 from '../Components/SelectContainer1'
import styled from 'styled-components'
import '../Pages/Styles/Select.css'
import Form from '../Components/Form'
 
const SelectStyled = styled.div`
body{
  background-image: url(${require(`../assets/images/bg-sidebar-mobile.svg`)});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(238, 245, 255);
}
`
const Select = () => {
  return (
    <SelectStyled>
        <SelectContainer1 />
        <Form />
    </SelectStyled>
  )
}

export default Select