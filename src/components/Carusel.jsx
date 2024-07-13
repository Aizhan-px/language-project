import { useState } from "react";
import Card from "./Card";
import CardWrapper from "./CardWrapper.jsx";





const Carusel = ({wordsData})=>{
    console.log(wordsData);
    const [position, setPosition] = useState(0);
    const [count, setCount] = useState(0);
    const [isClicked,setIsClicked]=useState(false)
   


    function handleClick(){
        setIsClicked(!isClicked) 
        setCount(count+1)
    }


    function showNextCard(){
        console.log('Next');
        if (position=== wordsData.length-1){
            setPosition(0)
            setIsClicked(false)
        }else {
            setPosition(position+1)
            setIsClicked(false)
        }
    } 

    function showPreviousCard(){
        console.log('Prev');
        if(position===0){
            setPosition(wordsData.length-1)
            setIsClicked(false)
        }else {
            setPosition(position-1)
            setIsClicked(false)
    }
}


return(
   <div>
    {wordsData?.length>0 && 
     <CardWrapper showNextCard= {showNextCard} 
     showPreviousCard={showPreviousCard}
     position={position}
     wordsData={wordsData}
     count={count}>
        
        <Card word={wordsData[position]} handleClick={handleClick} clicked={isClicked}/>
    </CardWrapper>}
   </div>
)
}
export default Carusel;

// Задание для проекта:

// в родительском компоненте для карточек слов добавь состояние: оно должно отображать,
// сколько слов изучено за одну тренировку.
// Состояние должно увеличиваться на 1 каждый раз, 
//когда человек нажимает кнопку «посмотреть перевод» в дочернем компоненте карточки слова;


// в компоненте карточки слова автоматически устанавливать фокус на кнопке «посмотреть перевод» 
//как только новая карточка отрендерилась на странице.
// Подумай, в каком методе жизненного цикла это сделать?