import Label from './Label'
import Input from './Input'

export default function InputForm(props) {
  const { label, name,type, placeholder} = props

  return (
    <>
    <Label htmlFor={name}>{label}</Label>          
    <Input name={name} type={type} placeholder={placeholder}></Input> 
    
    </>

  )
}
