import { Link } from "react-router-dom";
import Card from "./Card";
import "./WordElements.css"

    function WordElements({words}) {
      console.log(words);
      return (
        <div className="cardsArray" >
        {
            words.map((word)=>{
                return(
                    <Card word={word}/>
                )
            })
        }
        </div>
      )

       
        // return(
        //     {
        //         words.map((word)=>{
        //           return(
        //             <Card word={word}/>
        //           )}) 
        // })
    }
    export default WordElements;

    