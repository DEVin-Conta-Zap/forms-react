import { ReactDatePickerProps } from 'react-datepicker';

import * as S from './styles'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Input from '../Input';

type InputDateProps = {
  label: string;
  errorMessage?: string;
} & ReactDatePickerProps

const InputDate = ({
  label,
  errorMessage,
  ...otherProps
}: InputDateProps) => {

  return (
    <S.InputWrapper>
        <DatePicker {...otherProps}
          customInput={<Input label={label}  errorMessage={errorMessage}/>} />
    </S.InputWrapper>
  )
}

export default InputDate