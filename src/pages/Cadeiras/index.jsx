import React, { useContext, useState } from 'react'

const ProfessorContext = React.createContext();

const UltimaCadeira = () => {
  const [caneta, setCaneta] = useState('Caneta azul');

  return (
    <>
      <h1>Olá, sou a última cadeira</h1>
      <br />
      <ProfessorContext.Provider value={{ caneta }}>
        <ProximaCadeira />
      </ProfessorContext.Provider>
    </>
  )
}

const ProximaCadeira = () => {
  return (
    <>
      <h1>Olá, sou a próxima cadeira</h1>
      <br />
      <TerceiraCadeira />
    </>
  )
}

const TerceiraCadeira = () => {
  return (
    <>
      <h1>Oi, sou a terceira cadeira</h1>
      <br />
      <PrimeiraCadeira />
    </>
  )
}

const PrimeiraCadeira = () => {
  const { caneta } = useContext(ProfessorContext);
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