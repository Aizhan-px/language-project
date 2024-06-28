import { useState } from "react";
import Card from "./Card";
import CardWrapper from "./CardWrapper.jsx";


const Carusel = ({wordsData})=>{
    console.log(wordsData);
    const [position, setPosition] = useState(0);

    function showNextCard(){
        console.log('Next');
        if (position=== wordsData.length-1){
            setPosition(0)
        }else {
            setPosition(position+1)
        }
    } 

    function showPreviousCard(){
        console.log('Prev');
        if(position===0){
            setPosition(wordsData.length-1)
        }else {
            setPosition(position-1)
    }
}



return(
   <div>
    {wordsData?.length>0 && 
     <CardWrapper showNextCard= {showNextCard} 
     showPreviousCard={showPreviousCard}
     position={position}
     wordsData={wordsData}>
        
        <Card word={wordsData[position]}/>
    </CardWrapper>}
   </div>
)
}
export default Carusel;