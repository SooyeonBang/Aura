import React,{ useState } from 'react';
import styled from 'styled-components';
import Image2 from './img/prompt.jpg'
import Image3 from './img/draw.png'
import Image4 from './img/a.jpg'
import Image5 from './img/b.gif'
import Image6 from './img/c.png'
import Image7 from './img/toget.jpg'
import Image8 from './img/prompt2.jfif'
import Image9 from './img/prompt3.jfif'

import Image10 from './img/a.jfif'
import Image11 from './img/pink2.jfif'
import Image12 from './img/c.jfif'






const CustomUploadButton = styled.label`
  /* Add your custom styles for the upload button */
  /* Example styles */
   margin-right:20px;
   justify-content:center;
   align-items:center;
   width:200;
   height:38px;
   border-radius:80px;
   font-size:30px;
   font-weight:500;
   font-family:var(--font-googleMontserratbold);
  
   
   color: white;
   background-color:#2C2C2C;
   display: inline-block;
   padding: 8px;
   color: white;
   border: none;
   cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;





//<Pintitle>hihhi</Pintitle>

function upload_img(event,setPinImage){
   if( event.target.files && event.target.files[0]) {
      if(/image\/*/.test(event.target.files[0].type)) {
         const reader = new FileReader();
         
         reader.onload = function() {
            setPinImage(reader.result);

         };

         reader.readAsDataURL(event.target.files[0]);
      }
         

   }

}


function Pin() {
  const [pinImage,setPinImage] = useState();

  return (
     <Wrapper>
        <CustomUploadButton> +
        <input onChange={event => upload_img(event,setPinImage)} type="file"name="picture"id="picture"value="" ></input>
         </CustomUploadButton>
         <Container>
        
         
           <Card>
            
               <Pinimage>
              
            
              

                  <img src={pinImage} alt="+"></img> 
               </Pinimage>

            

            
           

         
         
         
             </Card>
             
         </Container>
         
         <Container>
            <div><img src={Image2} alt='img'></img></div>
         </Container>

         <Container>
            <div><img src={Image3} alt='img'></img></div>
         </Container>

         <Container>
            <div><img src={Image5} alt='img'></img></div>
         </Container>

         <Container>
            <div><img src={Image4} alt='img'></img></div>
         </Container>

         <Container>
            <div><img src={Image8} alt='img'></img></div>
         </Container>

         <Container>
            <div><img src={Image7} alt='img'></img></div>
         </Container>

         
         <Container>
            <div><img src={Image9} alt='img'></img></div>
         </Container>

         
         <Container>
            <div><img src={Image10} alt='img'></img></div>
         </Container>


         <Container>
            <div><img src={Image11} alt='img'></img></div>
         </Container>


         <Container>
            <div><img src={Image6} alt='img'></img></div>
         </Container>


         <Container>
            <div><img src={Image12} alt='img'></img></div>
         </Container>








        

       </Wrapper>
  )
}

export default Pin
const Wrapper = styled.div`
   display: inline-flex;
   flex-direction: row;
   flex-wrap: wrap;
   
   align-content: flex-start;
   
   column-gap:10px;
   
  

   
   height:100%;
   max-width: 1260px;
   padding: 5px;
   justify-content:center;

`
const Container = styled.div`
  // display:flex;
   

  
   
   margin:0 auto;
   align-items:center;
   
   box-sizing: border-box;
   cursor:pointer;
   
   width:380px;
  

  img{   
      //display: flex;
      
      
      width:100%;
      cursor: zoom-in;
      border-radius: 16px;
      object-fit:cover;
   }

`

const Card = styled.div`
   width:100%;
   height:100%;
   border-radius: 16px;
   column-gap:10px;
   
   overflow: hidden;

   background-color:#E7E5F3;



`
/*const Pintitle = styled.div`

  width:0;
  height: o;
  opacity: o;



`
*/
/*const Pinmodel = styled.div`

   width: 100%;
   height: 100%;
   opacity:0;
   background-color:rgba(0,0,0,0.1);
   transition-duration:0.3s;
    
   &:hover{  
    
    opacity:1;
    
   }



`*/

/*const Modalhead = styled.line`

   width:100%;
   height:15%;
   top:15;
   margin-right:10px;
   display: flex;
   justify-content:flex-end;
   align-items:center;



`*/


/*const Modalfoot = styled.div`

   width:100%;
   height: 15%;
   
   bottom:0;
   
   display: flex;
   justify-content:space-evenly;
   align-items:center;



`
*/


const P = styled.line`

   margin-right:10px;
   width:53px;
   height: 40px;
   border-radius:18px;
   font-size:14px;
   font-weight:700;
   
   display: flex;
   justify-content:center;
   align-items:center;
   color: white;
   background-color: black;

`



const Pinimage = styled.div`
   
   
   opacity:1;
   background-color:rgba(231,229,243,0.1);
   transition-duration:0.3s;
    
   &:hover{  
    
    opacity:0.5;
    
   }

   

   img[alt="+"] {
    //display:none;
    font-family:var(--font-googleMontserratbold);
  
  }





   
   width:100%;
   height:100%;
   

   display: flex;
   justify-content:center;
   align-items: center;

`