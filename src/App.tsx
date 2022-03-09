import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Payment from './pages/Payment';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/pagamento' element={<Payment />}/>
      </Routes>
    </>
  )
}

export default App;
