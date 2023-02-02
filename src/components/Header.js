import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
        <a href='#top'>
            <img src='/images/logo.svg' alt=''/>
        </a>
        <Menu>
            <p><a href="#section1">Model S</a></p>
            <p><a href="#section2">Model Y</a></p>
            <p><a href="#section3">Model 3</a></p>
            <p><a href="#section4">Model X</a></p>
        </Menu>
    </Container>
  )
}

export default Header

const  Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    p{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`