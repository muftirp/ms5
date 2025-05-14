import React from 'react'

export default function Input(props) {
    const {type, placeholder } = props
  return (
    <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:ring-2  bg-transparent border-1"
          />
  )
}
