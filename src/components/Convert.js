import React from 'react'

import styled from 'styled-components';

function Converter() {
    return (
        <Wrapper>
            
            <Container>
            
             <iframe src="https://splendid-image-generate.hf.space" 
             frameborder="0" width="2000" height="400">
             </iframe>
            </Container>
              
            
        </Wrapper>
    )
}


export default Converter

const Wrapper = styled.div`
   background-color:white;
   justify-content:center;
   font-family:var(--font-googleMontserrat);
   margin-top:15px;
   display:flex;
   width:100%;
   height:100%;
   
   
`
const Container = styled.div`
   background-color:white;
   margin-top:50px;
   display:flex;
   width: 80%;
   justify-content:center;
  
  
`
