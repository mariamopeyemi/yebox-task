import React from 'react';
import styled from 'styled-components'


const Button = ({title}) => {
  return <>
    <Btn>{title}</Btn>
  </>;
};


const Btn=styled.button`
    padding: 15px 40px ;
    border: none;
    outline: none;
    color:#fff;
    background-color: cyan;
    border-radius: 25px;
    font-weight: 400px;
    /* margin-top: 10%; */
`
export default Button;
