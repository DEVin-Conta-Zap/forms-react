import styled, { css } from 'styled-components';

type TextareaWrapperProps = {
  error?: boolean;
  disabled?: boolean;
}

export const TextareaWrapper = styled.div<TextareaWrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ error, disabled }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}

`

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`

export const Textarea = styled.textarea`
  height: 24px;
  border-radius: 2px;
  outline: none;
  padding: 5px 10px;
  border: 1px solid #ced4da;

  &:focus {
    border: 1px solid #006bb7;
  }
`

export const ErrorMessage = styled.div`
  color: #ef5350;
  font-size: 11px;
  margin-top: 2px;
`

const wrapperModifiers = {
  error: () => css`
    ${Textarea} {
      border: 1px solid #ef5350;
    }

    ${DescriptionInput} {
      color: #ef5350;
    }
  `,

  disabled: () => css`
    ${DescriptionInput},
    ${Textarea} {
      cursor: not-allowed;
      color: yellow;

      &::placeholder {
        color: white;
      }
    }
  `
}