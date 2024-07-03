import React from 'react';
import style from './Header.css';
import {
   BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
 
 



export default function Header() {
return (
<header className='header'>
   <div className='logoImg'>
   <img src={require('./panda_logo.png')} classNmae='Logo' alt='logo'/>
   </div>
   

   <nav className='nav'>
          <ul >
            <li>
              <Link to="/">Table</Link>
            </li>
            <li>
              <Link to="/game">game</Link>
            </li>
            <li>
              <Link to="/users">Card</Link>
            </li>
          </ul>
        </nav>
</header>
)
}

 
