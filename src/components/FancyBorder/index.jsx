
import * as S from './styles';

const FancyBorder = (props) => {

  return (
    <S.Container>
      {props.children}
    </S.Container>
  )
}

export default FancyBorder;