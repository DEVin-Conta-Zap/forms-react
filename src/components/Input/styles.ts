import styled, { css } from 'styled-components';
import { InputProps } from '.';

type InputErrorProps = Pick<InputProps, 'errorMessage'>

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`

export const InputText = styled.input<InputErrorProps>`
  height: 24px;
  border-radius: 2px;
  outline: none;
  padding: 5px 10px;
  /* border: 1px solid ${({errorMessage}) => errorMessage ? '#ef5350' : '#ced4da'}; */

  ${({errorMessage}) => css`
      border: 1px solid ${errorMessage ? '#ef5350' : '#ced4da'};
  `}

  &:focus {
    border: 1px solid #006bb7;
  }
`

export const ErrorMessage = styled.div`
  color: #ef5350;
  font-size: 11px;
  margin-top: 2px;
`