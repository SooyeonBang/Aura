import React from 'react'
import styled from 'styled-components'
import Pin from "./Pin";
import "./nomalize.css";


function Mainboard() {
    return (
        <Wrapper>
            <Container>
                <Pin/>
            
            </Container>

        </Wrapper>
       
    )
} 


export default Mainboard

const Wrapper = styled.div`
   background-color:#E7E5F3;
   display:flex;
   width:100%;
   height:100%;
   
   justify-content:center;
`
const Container = styled.div`
   background-color:#E7E5F3;//#E7E5F3;
   
   //flex-direction: row;
   //flex-wrap: wrap;
  // align-content: flex-start;
   //column-count:4;
   //column-gap:10px;
   //column-count:5;
   //column-gap:10px;
   margin:0 auto;
   
   
   margin-top:50px;
   
   //width: 80%;
   
`