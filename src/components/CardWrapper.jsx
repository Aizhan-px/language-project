import { getNodeText } from '@testing-library/react';
import { useState } from 'react';
import './CardWrapper.css';

function CardWrapper({children,showNextCard,showPreviousCard,position,wordsData,count}) {
   


    
return(
    <>
    <div>
        <div className='Counter'>
           learnedWords {count}

        </div>
        <div className="cardWrapper">
            <button onClick={showPreviousCard}>Left...</button>
            {children} 
            <button onClick={showNextCard}>Right...</button>
        </div>
        
        <div className="quantityWords">
        {position + 1}/{wordsData.length}
        </div>
    </div>
    </>
)
}
export default CardWrapper;