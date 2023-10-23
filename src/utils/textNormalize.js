export const textNormalize = text => {
  return text.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,');
};
