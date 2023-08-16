const RemoveDocumentMask = (value: string): string => {
  const exp = /[^0-9]{1,3}/g;
  return value.replace(exp, '').toString();
};

export default RemoveDocumentMask;
