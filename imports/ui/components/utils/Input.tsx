import React from 'react'

interface Props {
    label?: string,
    onChange: Function,
    type: string,
    value?: any,
    required?: boolean
}

const Input = ({label, onChange, ...props} : Props) => {
    return(
        <>
            {label && <label className="text-gray-500 text-sm">{label}</label>}
            <input 
                {...props} 
                onChange={e => onChange(e.target.value)} 
                className="rounded p-1 bg-white border border-1"            
            />
        </>
    )
}

export default Input