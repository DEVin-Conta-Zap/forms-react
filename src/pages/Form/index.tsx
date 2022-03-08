import { useState } from 'react';
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';

import * as S from './styles'

const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [erros, setErros] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let currentErros: string[] = [];

    if(!email) {
      currentErros = [...currentErros, 'E-mail é obrigatório']
    }

    if(!password) {
      currentErros.push('Senha é obrigatória')
    }

    setErros(currentErros);

    console.log("Enviou formulário")
  }

  return (
    <>
      <h1>Hello World</h1>
      <Avatar 
        imgUrl="https://upload.wikimedia.org/wikipedia/pt/8/86/Avatar_Aang.png"
        nome="Aang"/>

      <br />

      <S.FormWrapper onSubmit={handleSubmit}>
        {erros.map(item => <p key={item}>{item}</p>)}
        
        <Input
          label="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)} 
          placeholder="Digite seu email"
           />

        <Input 
          label='Senha'
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder='Digite sua senha' />

        <button type='submit'>Enviar</button>
      </S.FormWrapper>
    </>
  )
}

export default Form;