import { InputHTMLAttributes } from 'react';

import * as S from './styles'

type RadioProps = {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  name: string;
} & InputHTMLAttributes<HTMLInputElement>


const Radio = ({
  label,
  options,
  name,
  onChange,
  ...otherProps
}: RadioProps) => {

  return (
    <S.RadioWrapper>
      <S.Label>{label}</S.Label>
      {options.map(option => (
        <S.LabelOption key={option.value}>
          <input 
            name={name}
            type="radio"
            value={option.value}
            onChange={onChange}
            {...otherProps} />
          {option.label}
        </S.LabelOption>
      ))}
    </S.RadioWrapper>
  )
}

export default Radio;