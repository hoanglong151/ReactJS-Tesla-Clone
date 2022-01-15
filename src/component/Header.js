import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerState] = useState(false);

  function onShowBurger() {
    setBurgerState(!burgerStatus);
  }

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={onShowBurger} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={onShowBurger} />
        </CloseWrapper>
        <ul>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          <li><a href="/">Trade-In</a></li>
          <li><a href="/">Test Drive</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadster</a></li>
          <li><a href="/">Semi</a></li>
          <li><a href="/">Charging</a></li>
          <li><a href="/">Powerwall</a></li>
        </ul>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`

const Menu = styled.div`
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display:none
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer
`

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  background: #fff;
  width: 300px;
  z-index:9999;
  padding: 20px;
  transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.25s linear;
  ul{
    list-style: none;
    text-align: left;

    li{
      padding: 15px 0;

      a{
        font-weight: 600;
      }
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
