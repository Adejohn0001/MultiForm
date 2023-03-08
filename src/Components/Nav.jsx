import React from 'react'
import {
    NavLink
  } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
display: none;
.nav-link{
    text-decoration: none;
    display: flex;
}
li{
    list-style-type: none;
}
.links {
    display:flex;
    color:white;
}
.link2 {
}
.number {
  border: 1px solid white;
  border-radius: 100%;
}

@media (min-width: 576px) {
    display:block;
}
`
const Nav = () => {
  return (
    <NavStyled>
        <ul>
            <li className='one'>
              <NavLink 
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
              >
                <p>1</p>
                <span>Step 1</span> <br />
                <span>Your Info</span>
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/"
              activeClassName="active"
              className="nav-link"
              >
                <div className='links'>
                    <div>2</div>

                    <div className='link2'>
                        <div> Step 2</div>
                        <div>Select Plans</div>
                    </div>
                </div>
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/"
              activeClassName="active"
              className="nav-link"
              >
                <div className='links'>
                    <div>3</div>

                    <div className='link2'>
                        <div> Step 3</div>
                        <div>Add-Ons</div>
                    </div>
                </div>
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to='/'
              activeClassName="active"
              className="nav-link"
              >
                <div className='links'>
                    <div>4</div>

                    <div className='link2'>
                        <div> Step 4</div>
                        <div>Summary</div>
                    </div>
                </div>
              </NavLink>
            </li>

          </ul>
    </NavStyled>
  )
}

export default Nav