
export default function Description(props) {
    const { ket, desc } = props
  return (
    <div>
            <h2 className="text-2xl font-semibold">{ket}</h2>
            <p className="text-sm text-gray-300">{desc}</p>    
    </div>
    
  )
}
