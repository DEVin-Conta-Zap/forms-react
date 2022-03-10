
// @ts-ignore
import { mask } from 'remask';


export function formattedValue(value: string, type: 'cpf' | 'cnpj' | 'cep') {
  switch(type) {
    case 'cpf':
      return mask(value, '999.999.999-99')
    case 'cnpj':
      return mask(value, '99.999.999/9999-99')
    case 'cep':
      return mask(value, '99999-999')
  }
}