import React, { useState } from 'react'
import './TableRow.css'



function TableRow({wordData}) {
    console.log(wordData);

    const [value,setValue]=useState({id:wordData.id,english:wordData.english,transcription:wordData.transcription,russian:wordData.russian})
    const [isPressed,setIsPressed]=useState(false)
    const [errors,setErrors]= useState({
        english:false,
        transcription:false,
        russian:false,
    })

function handleEdit(){
    setIsPressed(!isPressed)
}

function handleChange(e) {
    const name = e.target.name
    const value =e.target.value
    setValue((prevword)=>{
        return{...prevword,[name]:value}
    })
    setErrors({
        ...errors,
        [name]:value.trim()===""? ' Поле не может быть пустым':false,
    })
} 


function handleSave() {
    setIsPressed(!isPressed)
}

function handleCancel() {
    setIsPressed(!isPressed)
    setValue({...wordData})
}

const  isButtonDisaibled=Object.values(errors).some((element)=> element)

    return (
        <tr>
        <td>{wordData.id}</td>
        {
            isPressed?(
                <>
                <td><input  type="text" name='english' onChange={handleChange}     value={value.english} className={errors.english ?  'border":"1px solid red':''}/> </td>
                <td><input type='text' name='transcription' onChange={handleChange} value={value.transcription} className={errors.transcription ? 'errorBorder' : ''}/> </td>
                <td><input type='text' name='russian' onChange={handleChange}      value={value.russian} className={errors.russian ? 'errorBorder' : ''}/></td>
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
          <button onClick={handleSave} disabled={isButtonDisaibled}> Save</button>
          <button onClick={handleCancel}>Cancel</button>
            </>
         ): (
            <>
          <button onClick={handleEdit} >Edit</button>
          <button>Delete</button>
            </>
           
         )
        }
     </td>
   </tr>
    )
    }

export default TableRow;


