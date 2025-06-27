import Label from './Label'
import Input from './Input'

export default function InputForm(props) {
  const { label, name,type, placeholder,value, onChange} = props

  return (
    <>
    <Label htmlFor={name}>{label}</Label>          
    <Input name={name} type={type} placeholder={placeholder} value={value}
            onChange={onChange}></Input> 
    
    </>

  )
}
