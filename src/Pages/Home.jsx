import React from 'react'
import styled from 'styled-components'
import Form from '../Components/Form'
import Button from "../Components/Button"
import '../Pages/Home.css'
import Navbg from '../Components/Navbg'

const HomeStyled = styled.div`
.navbackg{
  display:none;
}

@media (min-width:769px) {
  .container2 {
    display: flex;
    justify-content: center;
    margin-top:-4rem;
    background-color: white;
    margin: -0.5rem 0rem;
    border-radius: 10px;
  }
  .formhome {
    width:100%;
    margin-left:-5rem;
  }
  .navbackg{
    display:block;
  }
}
`
const Home = () => {
  return (
    <HomeStyled>
      <div>
        {/*<Nav />*/}
      </div>

      <div className='container2'>
        <div className='navbackg'> <Navbg /> </div>
         <div>
            <div className='formhome'>
               <Form />
            </div>
            <div>
              <Button />
            </div>
          </div>
      </div>
    </HomeStyled>
  )
}

export default Home