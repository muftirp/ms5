import React from 'react'

export default function Label(props) {
    // Destructure props to get the label text
    const { text } = props;
  return (
    <label className="block text-sm mb-1">{text}</label>
  )
}
