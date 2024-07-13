import React from 'react';
import style from './Header.css';
import {
   BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
   import Image from './panda_logo.png';
 



export default function Header() {
return (
<header className='header'>
   <div className='logoImg'>
   <img src={Image} className='Logo' alt='logo' width={50}/>
   </div>
   

   <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Table</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
          </ul>
        </nav>
</header>
)
}

 
