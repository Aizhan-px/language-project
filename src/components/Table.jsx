import React from 'react'
import TableRow from './TableRow'


function Table({wordsData}) {
    console.log(wordsData)
    return (
  <table border="1">
    <thead>
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
            wordsData.map((word)=>{
                return(
                    <TableRow wordData={word}/>
                )
            })
        }
    </tbody>
 </table>
    )
    }

export default Table;