import React, { useEffect } from 'react'
import TableRow from './TableRow'
import wordStore from './store/WordStore';
import { observer } from 'mobx-react';

const Table = ()=> {
console.log(wordStore);
useEffect(()=>{
  wordStore.loadData()

},[])
    return (
  <table border>
    <thead >
    <tr>
     <th>id</th>
     <th>english</th>  
     <th>transcription</th>
     <th>russian</th>
     <th>Edit</th>
   </tr>
    </thead>
    <tbody>
        {
            wordStore.words.map((word)=>{
                return(
                    <TableRow wordData={word}/>

                )
            })
        }
    </tbody>
 </table>
    )
    }

export default observer (Table);