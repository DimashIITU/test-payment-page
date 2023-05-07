import axios from 'axios';

export const useForm = () => {
  const throwError = (fn) => {
    fn();
  };

  const sendRequest = (e, name, expire, cvv, number, fn) => {
    e.preventDefault();
    if (name !== '' && expire !== '' && cvv !== '' && number !== '') {
      throwError(fn(false));
      axios.post('/create-payment', { pan: number, holder: name, expire, cvv2: cvv });
    } else {
      throwError(fn(true));
    }
  };
  return { sendRequest };
};
