import React from 'react'
import Image from './img/aura.svg'
import styled from 'styled-components';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
               <img src={Image} alt='img' />
               



            </LogoWrapper>
                

           
                
            
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:flex;
    
    align-content: center;
    height: 56;
    padding: 12px 4px 4px 16px;
    background-color:#2C2C2C;
    color: black;
   
    top: 0;
    
    backdrop-filter: blur(30px);
`
const LogoWrapper = styled.div`
   display: flex;
  align-content: center;
  width : 100%;
  margin : 0 auto;/* Adjust the width of the logo as needed */
  height: 50px; /* Adjust the height of the logo as needed */
  justify-content: center;
  cursor: pointer;
  
  //display : block;
`