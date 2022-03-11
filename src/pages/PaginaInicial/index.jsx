import { useState } from 'react'

const NavBar = () => {

  return (
    <nav style={{background: '#006bb7'}}>DevInHouse APP</nav>
  )
}

const MainPage = ({ content }) => {
  return (
    <div style={{ margin: '30px'}}>
      <h3>Página principal</h3>
      {content}
    </div>
  )
}

const Content = ({ message }) => {
  return (
    <div style={{margin: '30px'}}>
      {message}
    </div>
  )
}

const Message = ({ name }) => {
  return <p>Bem-vindo {name} </p>
}


const PaginaInicial = () => {

  const [user, setUser] = useState({ name: 'Danilo'});

  return (
    <div>
      <NavBar />
      <MainPage content={
          <Content message={
            <Message name={user.name} /> } />
        } />
    </div>
  )
}

export default PaginaInicial