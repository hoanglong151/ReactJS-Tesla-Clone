import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, descriptionLink, leftButton, rightButton, backgroundImg }) {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description}
            <a href="#"> {descriptionLink}</a>
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftButton}
            </LeftButton>
            {rightButton && <RightButton>
              {rightButton}
            </RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  height:100vh;
  weight:100vw;
  background-image: ${props => `url("/images/${props.backgroundImg}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ItemText = styled.div`
  padding-top: 15vh;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.65;
  color: #000;
`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`