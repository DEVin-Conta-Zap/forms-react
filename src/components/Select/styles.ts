import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionSelect = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`

export const List = styled.select`
  background: #FFF;
  width: 100%;
  height: 24px;
  border: 1px solid #ced4da;
  outline: 0;
  padding-left: 5px;
  border-radius: 2px;

  option {
    background: #ced4da;
  }

  &:focus {
    border-color: #006bb7;
  }
`