import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    </>
  )
}

export default App;
