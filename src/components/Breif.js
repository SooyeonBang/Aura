
import React from 'react'
import styled from 'styled-components';
import Image3 from './img/title.png'


function Breif() {
    return (
        <Wrapper>
            
            <Container>
            <img src={Image3} alt='img' />
                
             
        
            </Container>
              
            
        </Wrapper>
    )
}

export default Breif

const Wrapper = styled.div`
   background-color:#2C2C2C;
   justify-content:center;
   display:flex;
   width:100%;
   height:50%;
   
   
`
const Container = styled.div`
     display:flex;
     align-content: center;
     background-color:#2C2C2C;
     margin : 0 auto;
     display:flex;
     width: 80%;
     height:50%;
     justify-content:center;
  
  
`

