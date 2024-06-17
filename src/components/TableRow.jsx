import React, { useState } from 'react'

function TableRow({wordData}) {
    console.log(wordData);

    const [value,setValue]=useState({id:wordData.id,english:wordData.english,transcription:wordData.transcription,russian:wordData.russian})
    const[isPressed,setIsPressed]=useState(false)

function handleEdit(){
    setIsPressed(!isPressed)
}

function handleChange(e) {
    const name = e.target.name
    const value =e.target.value
    setValue((prevword)=>{
        return{...prevword,[name]:value}
    })
}


function handleSave() {
    setIsPressed(!isPressed)
}

function handleCancel() {
    setIsPressed(!isPressed)
    setValue({...wordData})
}

    return (
        <tr>
        <td>{wordData.id}</td>
        {
            isPressed?(
                <>
                <td><input  type="text" name='english' onChange={handleChange} value={value.english}/></td>
                <td><input type='text' name='transcription' onChange={handleChange} value={value.transcription}/></td>
                <td><input type='text' name='russian' onChange={handleChange} value={value.russian}/></td>
                </>
            ): (
               
                <>
                <td>{value.english}</td>
                <td>{value.transcription}</td>
                <td>{value.russian}</td>
                </>
            )

        }

     <td>
         {isPressed?(
            <>
          <button onClick={handleSave}> Save</button>
          <button onClick={handleCancel}>Cancel</button>
            </>
         ): (
            <>
          <button onClick={handleEdit}>Edit</button>
          <button>Delete</button>
            </>
           
         )
        }
     </td>
   </tr>
    )
    }

export default TableRow;


