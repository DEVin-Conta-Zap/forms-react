import { createContext, useContext, useState } from 'react'

const NavBar = () => {

  return (
    <nav style={{background: '#006bb7'}}>DevInHouse APP</nav>
  )
}

const MainPage = () => {
  return (
    <div style={{ margin: '30px'}}>
      <h3>Página principal</h3>
      <Content />
    </div>
  )
}

const Content = () => {
  return (
    <div style={{margin: '30px'}}>
      <Message />
    </div>
  )
}

const Message = () => {
  const user = useContext(userContext);
  return <p>Bem-vindo {user.name} </p>
}


const userContext = createContext();

const PaginaInicial = () => {

  const [user, setUser] = useState({ name: 'Danilo'});

  return (
    <div>
      <NavBar />
      <userContext.Provider value={user}>
        <MainPage />
      </userContext.Provider>
    </div>
  )
}

export default PaginaInicial