import React from 'react'
import styled from 'styled-components';
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for"
        descriptionLink="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-3.jpg"
      />
      <Section
        title="Model S"
        description="Order Online for"
        descriptionLink="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-s.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for"
        descriptionLink="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-x.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for"
        descriptionLink="Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        backgroundImg="model-y.jpg"
      />
      <Section
        title="Accessories"
        description=""
        descriptionLink=""
        leftButton="Shop Now"
        backgroundImg="accessories.jpg"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`