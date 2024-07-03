import  React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';




function Card({word}) {
    const [isClicked,setIsClicked]=useState(false)
    function handleClick(){
        setIsClicked(!isClicked)
    }

    return (
        <div className='separate-cards'>
        <p>{word.english}</p>
        <p>{word.transcription}</p>
        {isClicked ?
    <p>{word.russian}</p>
     :
     <button onClick={handleClick} style={{color:'black','background':"pink",'border':"1px solid gray",'border-radius': "45%" }}>translation</button>
        }
        </div>
    )
    }
    
    export default Card;
    
    