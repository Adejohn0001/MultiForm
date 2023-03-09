import React from 'react'
import {
    NavLink
  } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.div`
.tech01{
  display:flex;
  justify-content:center;
  list-style-type: none;
  margin-bottom: 3.2rem;
}
.nav-links-tech{
  color:white;
  font-size:20px;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 100%;
  margin: 4rem 0.8rem;
  text-decoration:none;
}
.tech01 li {
  margin-top: 2rem;
}
.active {
  background-color: #bee2fc;
  color:#04264b;
  border:none;
}

@media (min-width: 576px) {
}

@media (min-width: 769px) {
  .tech01{
      display:flex;
      flex-direction: column;
  }
};
`
const Nav = () => {
  return (
    <NavStyled>
        <ul className='tech01'>
            <li className='one'>
              <NavLink 
              exact
              to="/"
              activeClassName="activetech"
              className="nav-links-tech"
              >
                1
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/selectplan"
              activeClassName="activetech"
              className="nav-links-tech"
              >
                2
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/add-ons"
              activeClassName="activetech"
              className="nav-links-tech"
              >
                3
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to='/summary'
              activeClassName="activetech"
              className="nav-links-tech"
              >
                4
              </NavLink>
            </li>

          </ul>
    </NavStyled>
  )
}

export default Nav