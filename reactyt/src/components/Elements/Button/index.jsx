import React from 'react'

export default function Button(props) {
    const { children, onClick = () => {}, type = "button" } = props
    return (
        <button 
        type={type}
        onClick={() => onClick()}
        className="w-full border border-gray-400 hover:bg-gray-700 py-2 rounded-full flex items-center justify-center gap-2 text-sm  "
        >
            {children}

        </button>
    )
}
// className=" flex items-center justify-center"