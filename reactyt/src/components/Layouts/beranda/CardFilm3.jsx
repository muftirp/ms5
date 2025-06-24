import React from 'react'

export default function CardFilm3() {


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
      <img src={image} alt="film" className="p-0.5 rounded size-75" />
    </a>
  )
}

const Body = (props) => {
  const { children, name } = props
  return (
    <div className="">
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
    <div className="flex items-center justify-between ">
      <span className="text-xl font-bold text-white">{price.toLocaleString('id-ID',{style: 'currency', currency:'IDR'})}</span>
      <button className="bg-blue-600 p-2 rounded-md" >Sewa</button>
    </div>
  )
}

CardFilm3.Header = Header
CardFilm3.Body = Body
CardFilm3.Footer = Footer
// export default CardFilm