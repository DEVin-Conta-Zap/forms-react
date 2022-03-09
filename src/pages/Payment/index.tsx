
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import InputDate from '../../components/InputDate';
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

type PaymentData = {
  optionPayment: string;
  cardNumber: string;
  expirationDate: Date;
}


const Payment = () => {

  const [paymentData, setPaymentData] = useState<PaymentData>({optionPayment: '', cardNumber: '', expirationDate: new Date()});
  // const [optionPayment, setOptionPayment] = useState('');
  // const [cardNumber, setCardNumber] = useState('');
  // const [expirationDate, setExpirationDate] = useState(new Date());

  useEffect(() => {
    console.log(paymentData)
  },[paymentData])

  return (
    <S.Container>
      <S.Form>
        <Select 
          label='Escolha a forma de pagamento'
          options={OPTIONS_PAYMENT}
          value={paymentData.optionPayment}
          onChange={event => setPaymentData({...paymentData, optionPayment: event.target.value})}
        />

        <Input 
          label='Número do cartão'
          value={paymentData.cardNumber}
          onChange={event => setPaymentData({...paymentData, cardNumber: event.target.value})}
          placeholder="1111 2222 3333 4444"
        />

        <InputDate 
          label="Data de expiração"
          onChange={(date:Date) => setPaymentData({...paymentData, expirationDate: date})}
          dateFormat="MM/yyyy"
          selected={paymentData.expirationDate}
          showMonthYearPicker
        />
      </S.Form>
    </S.Container>
  )
  
}

export default Payment;