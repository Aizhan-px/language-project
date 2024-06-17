import React from 'react'

function Button(props) {
    return (
        <button style={{'color':'white','background':'pink'}}>{props.text} </button>
    )
    }

export default Button;