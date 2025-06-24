import React from 'react'

export default function CardSeries2() {

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
    <div className="">
<a href="#">
      <img src={image} alt="series" className="p-1 rounded-2xl size-45" />
    </a>
    </div>
    
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

CardSeries2.Header = Header
CardSeries2.Body = Body
CardSeries2.Footer = Footer
// export default CardSeries1