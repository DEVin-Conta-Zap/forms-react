import { SelectHTMLAttributes } from 'react';

import * as S from './styles'

type OptionProps = {
  label: string;
  value: unknown;
}

type SelectProps = {
  label: string;
  value: string;
  description?: string;
  options: OptionProps[];
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  label,
  options,
  description,
  ...otherProps
}: SelectProps) => {

  return (
    <S.SelectWrapper>
      <S.DescriptionSelect>Qual a sua cor favorita ?</S.DescriptionSelect>
          <S.List {...otherProps}>
            <option disabled value="">{description}</option>
            {options.map(option => 
              <option 
                key={String(option.value)} 
                value={String(option.value)}>{option.label}</option>
            )}
          </S.List>
    </S.SelectWrapper>
    
  )
}

export default Select;
