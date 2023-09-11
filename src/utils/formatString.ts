export const sanitizeAvatar = (name: string) => {
  const names = name.split(' ');
  let initials = '';
  if (names?.length) {
    initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
  return initials;
};

export const sanitizeTextByMaxLength = (value: string, maxLength = 150) => {
  const trimmedString = value.substring(0, maxLength);
  return trimmedString.substring(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
  );
};

export const formatInstallmentsValor = (value: number, qtd: number) => {
  const valueConvert = value.toString();
  const valueParse = parseFloat(valueConvert);
  const parcelValue = (valueParse / qtd).toFixed(2);
  return parcelValue.replace('.', ',');
};
