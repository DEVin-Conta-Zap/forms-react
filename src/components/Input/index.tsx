import { InputHTMLAttributes } from 'react';

import * as S from './styles'

export type InputProps = {
  label: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({label, errorMessage, ...otherProps } : InputProps) => {
  return (
    <S.InputWrapper>
      <S.DescriptionInput>{label}</S.DescriptionInput>
      <S.InputText errorMessage={errorMessage} {...otherProps} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.InputWrapper>
  )
}

export default Input