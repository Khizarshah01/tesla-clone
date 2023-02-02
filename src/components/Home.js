import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
               sd = "section1"
               title ="Model S"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-s.jpg"
               leftBtnText="Cutom Order"
               rightBtnText="Existing inventory"
        /> 
             <Section 
               sd = "section2"
               title ="Model Y"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-y.jpg"
               leftBtnText="Cutom Order"
               rightBtnText="Existing inventory"
        /> 
             <Section 
               sd = "section3"
               title ="Model 3"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-3.jpg"
               leftBtnText="Cutom Order"
               rightBtnText="Existing inventory"
        /> 
             <Section 
               sd = "section4"
               title ="Model X"
               description = "Order Online for Touchless Delivery"
               backgroundImg = "model-x.jpg"
               leftBtnText="Cutom Order"
               rightBtnText="Existing inventory"
        /> 
                
        </Container>
  )
}

export default Home 

const Container = styled.div`
    height:100vh;
`