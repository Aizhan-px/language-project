import { Link } from "react-router-dom";
import Card from "./Card";

    function WordElements(words) {
      console.log(words);
      return (
        {
          words.map((word)=>{
            return(
              <Card word={word}/>
            )
      }
      )})

       
        // return(
        //     {
        //         words.map((word)=>{
        //           return(
        //             <Card word={word}/>
        //           )}) 
        // })
    }
    export default WordElements;

    