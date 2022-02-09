import React from 'react';
import Button from './Button';
import styled from 'styled-components';
const Body = () => {
  return <>
      
      <Jumbotron>
          <Title >
              Find Your <span className='primaryText'>Space</span> In Metaverse
          </Title>
          <Paragraph> The Metaspace studio focuses on opening portal to digital spaces to our partners</Paragraph> 
        <Button title={"Get In Touch"} /> 
      </Jumbotron>
  </>;
};


const Title= styled.h1`
    font-size: 80px;
    margin-bottom: 20px;
    >.primaryText{
        color: cyan;
    }

`
const Paragraph = styled.p`
    font-size: 16px;
    width: 70%;
    margin-bottom: 40px;
    
`
const Jumbotron= styled.div`
    min-width: 400px;
    width: 45%;
    margin-left: 5%;
    margin-right: auto:
    margin-top: 100px;
    text-align: left;
    
`
export default Body;
