import { TextareaHTMLAttributes } from 'react'

import * as S from './styles'

type TextareaProps = {  
  label: string;
  errorMessage?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = ({
  label,
  errorMessage,
  rows = 5,
  ...otherProps
}: TextareaProps) => {

  return (
    <S.TextareaWrapper error={!!errorMessage}>
      <S.DescriptionInput>{label}</S.DescriptionInput>
      <S.Textarea rows={rows} {...otherProps}/>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.TextareaWrapper>
  )
}

export default Textarea