import { InputHTMLAttributes } from 'react';

import * as S from './styles'

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({label, ...otherProps } : InputProps) => {
  return (
    <S.InputWrapper>
      <S.DescriptionInput>{label}</S.DescriptionInput>
      <S.InputText {...otherProps} />
    </S.InputWrapper>
  )
}

export default Input