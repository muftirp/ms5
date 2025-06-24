import React from 'react'

export default function Input(props) {
    const {type, placeholder, name } = props
  return (
    <input
            type={type}
            className="w-full px-4 py-2 rounded-full  text-white focus:ring-2  bg-transparent border-1"
            placeholder={placeholder}
            name={name}
            id={name}
            
          />
  )
}
