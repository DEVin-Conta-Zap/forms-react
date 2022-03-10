import FancyBorder from '../FancyBorder'

import * as S from './styles'

const WelcomeDialog = () => {
  return (
    <FancyBorder>
      <S.Title>Bem-vindo</S.Title>
      <S.Message>Obrigado pela sua visita</S.Message>
    </FancyBorder>
  )
}

export default WelcomeDialog