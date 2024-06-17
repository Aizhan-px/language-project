import React from 'react';
import style from './Header.css';




export default function Header() {
return (
<header className='Header'>
   <div class='logoImg'>
   <img src={require('../components/youTube.png')} classNmae='Logo' alt='logo'/>
   </div>
   
   <nav clasNmae='Nav'>
    <div>
    <a href='/'>Home</a>
    <a href='/'>Articles</a>
    <a href='/'>About</a>
    <button>Logout</button>
    </div>
   </nav>
</header>
)
}

 
