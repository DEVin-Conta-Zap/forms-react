import { useState } from 'react';
import Avatar from '../../components/Avatar';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import InputDate from '../../components/InputDate';
import Radio from '../../components/Radio';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import * as S from './styles'

type ErrosProps = {
  email?: string;
  password?: string;
}

const FOODS = [
  {
    label: 'Lasanha',
    value: 'lasanha'
  },
  {
    label: 'Pizza',
    value: 'pizza'
  },
  {
    label: 'Sushi',
    value: 'sushi'
  }
]


const Form = () => {

  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [food, setFavoriteFood] = useState('');
  const [acceptLicence, setAcceptLicence] = useState(false);
  const [erros, setErros] = useState<ErrosProps>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let currentErros: ErrosProps = {};

    if(!email) {
      currentErros.email = 'E-mail é obrigatório';
    }

    if(!password) {
      currentErros.password = 'Senha é obrigatória';
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
        
        <Input
          label="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)} 
          placeholder="Digite seu email"
          errorMessage={erros.email}/>

        <Input 
          label='Senha'
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder='Digite sua senha'
          errorMessage={erros.password} />

          <Textarea 
            label="Comentários" />

          <Select 
            value={color}
            label="Qual a sua cor favorita ?"
            description='Selecione uma cor'
            onChange={event => setColor(event.target.value)}
            options={
              [
                {
                  label: 'Vermelha',
                  value: 'red'
                },
                {
                  label: 'Azul',
                  value: 'blue'
                }
              ]
            }
          /> 

          <InputDate 
            label="Data de nascimento"
            onChange={(date:Date) => setDataNascimento(date)}
            selected={dataNascimento} />

          <Radio 
            label='Qual a sua comida favorita ?'
            name='favoriteFood'
            onChange={event => setFavoriteFood(event.target.value)}
            options={FOODS}
          />

          <Checkbox label="Aceito os termos de licença de uso"
            checked={acceptLicence}
            onChange={event => setAcceptLicence(event.target.checked)} />

           

        <button type='submit'>Enviar</button>
      </S.FormWrapper>
    </>
  )
}

export default Form;