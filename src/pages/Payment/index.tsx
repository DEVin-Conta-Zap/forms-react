
import { useState } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import * as S from './styles'

const OPTIONS_PAYMENT = [
  {
    value: 'CC',
    label: 'Cartão de Crédito'
  },
  {
    value: 'CD',
    label: 'Cartão de Débito'
  },
  {
    value: 'BB',
    label: 'Boleto'
  }
]


const Payment = () => {

  const [optionPayment, setOptionPayment] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  return (
    <S.Container>
      <S.Form>
        <Select 
          label='Escolha a forma de pagamento'
          options={OPTIONS_PAYMENT}
          value={optionPayment}
          onChange={event => setOptionPayment(event.target.value)}
        />

        <Input 
          label='Número do cartão'
          value={cardNumber}
          onChange={event => setCardNumber(event.target.value)}
          placeholder="1111 2222 3333 4444"
        />
      </S.Form>
    </S.Container>
  )
  
}

export default Payment;