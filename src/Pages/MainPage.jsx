import React from 'react';
import NavBar from '../Components/NavBar';
import Body from '../Components/Body';
import './MainPage.css'

const MainPage = () => {
  return    <div className='mainContainer'>
        <div className='myNavBar'>
            < NavBar />
        </div>

    <div className='myBody' style={{marginTop:50}}> 
        < Body />
        </div>



        </div>
  ;
};

export default MainPage;
