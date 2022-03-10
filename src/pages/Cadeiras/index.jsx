import { useState } from 'react'

const UltimaCadeira = () => {
  const [caneta, setCaneta] = useState('Caneta azul');

  return (
    <>
      <h1>Olá, sou a última cadeira</h1>
      <br />
      <ProximaCadeira caneta={caneta}/>
    </>
  )
}

const ProximaCadeira = ({caneta}) => {
  return (
    <>
      <h1>Olá, sou a próxima cadeira</h1>
      <TerceiraCadeira caneta={caneta}/>
    </>
  )
}

const TerceiraCadeira = ({caneta}) => {
  return (
    <>
      <h1>Oi, sou a terceira cadeira</h1>
      <PrimeiraCadeira caneta={caneta}/>
    </>
  )
}

const PrimeiraCadeira = ({ caneta }) => {
  return (
    <>
      <h1>Oi, sou a primeira cadeira</h1>
      <h4>{caneta} do Danilo está aqui</h4>
    </>
  )
}

const Cadeiras = () => {

  return (
    <UltimaCadeira />
  )
}

export default Cadeiras;