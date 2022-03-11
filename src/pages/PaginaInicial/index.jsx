import { useState } from 'react'

const NavBar = () => {

  return (
    <nav style={{background: '#006bb7'}}>DevInHouse APP</nav>
  )
}

const MainPage = ({ children }) => {
  return (
    <div style={{ margin: '30px'}}>
      <h3>Página principal</h3>
      {children}
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <div style={{margin: '30px'}}>
      {children}
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
      <MainPage>
        <Content>
          <Message name={user.name}/>
        </Content>
      </MainPage>
    </div>
  )
}

export default PaginaInicial