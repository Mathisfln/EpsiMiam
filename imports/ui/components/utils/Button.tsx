import React from 'react'

interface Props {
    
}

const Button : React.FC<Props> = (props : Props) => {
    return(
        <button className="rounded p-2 bg-blue-400 text-white" {...props}>{props.children}</button>
    )
}

export default Button