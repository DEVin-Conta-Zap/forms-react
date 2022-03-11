
import React, { InputHTMLAttributes } from 'react';
import * as S from './styles'

type CheckboxProps = {
  label: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  errorMessage,
  ...otherProps
}: CheckboxProps) => {

  return (
    <S.CheckboxWrapper>
      <S.InputCheckbox type="checkbox" {...otherProps}/>
      <S.Description>{label}</S.Description>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.CheckboxWrapper>
  )
}

export default React.memo(Checkbox);