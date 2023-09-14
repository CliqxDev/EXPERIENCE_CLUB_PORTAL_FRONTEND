const RemoveCnpjMask = (cnpj: string): string => cnpj.replace(/\D/g, '');

export default RemoveCnpjMask;
