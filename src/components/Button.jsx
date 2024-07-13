import React from 'react'

function Button(props) {
    return (
        <button style={{'color':'white','background':'orange','padding':'5px 10px'}}>{props.text} </button>
    )
    }

export default Button;