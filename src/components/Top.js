import React from 'react'
import styled from 'styled-components';

function Top() {
    return (
        <LinerWrapper>
           <p>This project wants to reflect on the aura of art. 
            Create images on the fly from prompts, or Show the artwork that has a lot of care. 
            Wants to find the best way to deal with the cutting-edge change that is AI.
            Thank you!
           </p>
        </LinerWrapper>
    )
}

export default Top

const LinerWrapper = styled.div`
    display:flex;
    align-items: center;
    height: 20;
    padding: 10px 4px 4px 10px;
    background-color: #8C97B8;
    color: #F2FBD4;
    font-size:15px;
    position: sticky;
    font-family:var(--font-googleMontserrat);
    top: 0;
    
    backdrop-filter: blur(30px);
`
