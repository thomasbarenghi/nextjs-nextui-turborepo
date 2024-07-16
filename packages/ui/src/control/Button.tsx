import { Button as ButtonUI } from '@nextui-org/react'

const Button = () => (
  <div>
    <h1>nativo</h1>
    <button className='bg-red-800 text-blue-500'>Soy un boton Tailwind</button>
    <h1>nextui</h1>
    <ButtonUI color='primary'>Soy un boton NextUI</ButtonUI>
  </div>
)

export default Button
