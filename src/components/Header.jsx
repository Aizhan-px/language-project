import React from 'react';
import './Header.css';
import {
   BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
   import Image from './panda_logo.png';




export default function Header() {
return (
<header className='header'>
   <div className='logoImg'>
   <a href='https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics'><img src={Image} className='Logo' alt='logo' width={50}/></a>
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

 
