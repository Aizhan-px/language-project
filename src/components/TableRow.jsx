import React, { useState } from 'react'

function TableRow({wordData}) {
    console.log(wordData);

    const [value,setValue]=useState({id:wordData.id,english:wordData.english,transcription:wordData.transcription,russian:wordData.russian})
    const[isPressed,setIsPressed]=useState(false)

function handleEdit(){
    setIsPressed(!isPressed)
}



    return (
        <tr>
        <td>{wordData.id}</td>
        {
            isPressed?(
                <>
                <td><input type="text" name='english' value={value.english}/></td>
                <td><input type='text' name='transcription' value={value.transcription}/></td>
                <td><input type='text' name='russian' value={value.russian}/></td>
                </>
            ): (
                <>
                <td>{wordData.english}</td>
                <td>{wordData.transcription}</td>
                <td>{wordData.russian}</td>
                </>
            )

        }
     <td>
     <button onClick={handleEdit}>Edit</button>
     <button>Delete</button>
     </td>
   </tr>
    )
    }

export default TableRow;