import  React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import './card.css'




function Card({word,handleClick,clicked}) {
   
    return (
        <div className='separate-cards'>
        <p>{word.english}</p>
        <p>{word.transcription}</p>
        {clicked ?
    <p>{word.russian}</p>
     :
     <button onClick={handleClick} style={{color:'black','border':"1px solid gray",'border-radius': "40%",'padding':"5px 10px" }}>translation</button>
        }
        </div>
    )
    }
    
    export default Card;
    
    