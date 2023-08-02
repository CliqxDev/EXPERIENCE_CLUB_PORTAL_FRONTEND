/* eslint-disable @typescript-eslint/no-explicit-any */
export const masks: any = {
  text: {
    mask: '',
    maskPlaceholder: ''
  },
  cel: {
    mask: '(99) 99999-9999',
    maskPlaceholder: '(__) _____-____'
  },
  tel: {
    mask: '(99) 9999-9999',
    maskPlaceholder: '(__) ____-____'
  },
  cep: {
    mask: '99999-999',
    maskPlaceholder: '_____-___'
  },
  cpf: {
    mask: '999.999.999-99',
    maskPlaceholder: ''
  },
  rg: {
    mask: '************',
    maskPlaceholder: ''
  },
  rne: {
    mask: '999999999999999',
    maskPlaceholder: ''
  },
  data: {
    mask: '99/99/9999',
    maskPlaceholder: 'dd/mm/aaaa'
  },
  currency: {
    mask: '999999999999999',
    maskPlaceholder: ''
  },
  cnh: {
    mask: '999999999999999',
    maskPlaceholder: ''
  }
};

export default masks;
