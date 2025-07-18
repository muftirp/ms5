import React from 'react'

export default function CardFilm() {

const { children } =  arguments[0];

  return (
    <div>
        {children}
    </div>
  )
}

const Header = (props) => {
   const { image } = props
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg size-75" />
    </a>
  )
}

const Body = (props) => {
  const { children, name } = props
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  )
}

const Footer = (props) => {
  const { price,id } = props
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID',{style: 'currency', currency:'IDR'})}</span>
      <button className="bg-blue-600 p-2 rounded-md" >Sewa</button>
    </div>
  )
}

CardFilm.Header = Header
CardFilm.Body = Body
CardFilm.Footer = Footer
// export default CardFilm