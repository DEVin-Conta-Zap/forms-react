import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cadeiras from './pages/Cadeiras';
import Composicao from './pages/Composicao';
import Form from './pages/Form';
import PaginaChat from './pages/PaginaChat';
import Payment from './pages/Payment';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/pagamento' element={<Payment />}/>
        <Route path='/composicao' element={<Composicao />}/>
        <Route path='/chat' element={<PaginaChat />}/>
        <Route path='/cadeiras' element={<Cadeiras />}/>
      </Routes>
    </>
  )
}

export default App;
