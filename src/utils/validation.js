export const cardNumberValidate = (value) => {
  const numbers = value.replace(/\D+/g, '').replace(/(\d{4})/g, '$1 ');
  return [...numbers].slice(0, 19).join('');
};
export const cardNameValidate = (value) => {
  return value.replace(/\d+/g, '');
};
export const cardDateValidate = (value) => {
  const numbers = value.replace(/\D+/g, '').replace(/^(\d{2})(\d{2})/, '$1/$2/');
  return [...numbers].slice(0, 5).join('');
};
export const cardCvvValidate = (value) => {
  const numbers = value.replace(/\D+/g, '');
  return [...numbers].slice(0, 3).join('');
};
