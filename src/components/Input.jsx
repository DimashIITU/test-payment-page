import React from 'react';

import PropTypes from 'prop-types';
import {
  cardNumberValidate,
  cardNameValidate,
  cardDateValidate,
  cardCvvValidate,
} from '../utils/validation';

export const Input = ({ type, value, onChange, onFocus, name, validatedValue }) => {
  React.useEffect(() => {
    if (name === 'number') {
      validatedValue(cardNumberValidate(value));
    } else if (name === 'name') {
      validatedValue(cardNameValidate(value));
    } else if (name === 'expiry') {
      validatedValue(cardDateValidate(value));
    } else if (name === 'cvc') {
      validatedValue(cardCvvValidate(value));
    }
  }, [value]);
  return <input type={type} value={value} onChange={onChange} onFocus={onFocus} name={name} />;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  validatedValue: PropTypes.func.isRequired,
};
