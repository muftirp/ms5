import React from 'react'

export default function Label(props) {
    // Destructure props to get the label text
    const { htmlFor, children } = props;
  return (
    <>
    <label htmlFor={htmlFor}
    className="block text-sm mb-1" >
      {children}
      </label>
    </>
  )
}
