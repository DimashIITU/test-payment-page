import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({
  sum: 1000,

  setSum: () => {},

  name: '',
  setName: () => {},
});

export const Context = ({ children }) => {
  const [sum, setSum] = useState();
  const [name, setName] = useState();

  const value = useMemo(() => ({ sum, setSum, name, setName }), [sum, name]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
Context.propTypes = {
  children: PropTypes.node,
};
