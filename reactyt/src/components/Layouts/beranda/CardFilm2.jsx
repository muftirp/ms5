import React from 'react'

export default function CardFilm2() {

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
      <img src={image} alt="film" className="p-1 rounded-2xl size-75" />
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

CardFilm2.Header = Header
CardFilm2.Body = Body
CardFilm2.Footer = Footer
// export default CardFilm