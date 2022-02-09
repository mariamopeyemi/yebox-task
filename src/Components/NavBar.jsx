import React from 'react';
import './NavBar.css'
import {AiFillLock} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

const NavBar = () => {
  return <div>

      <div className='navBarContainer'>
        <div>
                <p>Meta Space</p>
        </div>
        <ul className='rightNavBar'>
            <li>Home</li>
            <li>Service</li>
            <li>digital</li>
            <li>Partner</li>
        </ul>
        <div>
            < AiFillLock />
            < AiOutlineSearch/>
        </div>
      </div>

  </div>;
};

export default NavBar;
