import { useState, useContext } from 'react';

import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useForm } from '../hooks/useForm';
import '../styles.css';
import { Input } from './Input';
import { UserContext } from '../Context';
import { Link } from 'react-router-dom';

export const Form = () => {
  const [number, SetNumber] = useState('');
  const [name, SetName] = useState('');
  const [date, SetDate] = useState('');
  const [cvc, SetCvc] = useState('');
  const [focus, SetFocus] = useState('');
  const [error, SetError] = useState(false);
  const { sum, setSum, setName } = useContext(UserContext);
  setSum(10000);

  const { sendRequest } = useForm();

  const send = (e) => {
    setName(name);
    sendRequest(e, name, date, cvc, number, SetError);
  };

  return (
    <>
      <div className="rccs__card rccs__card--unknown">
        <Cards number={number} name={name} expiry={date} cvc={cvc} focused={focus} />
      </div>

      <form>
        <div className="formContainer">
          <div className="inputContainer">
            <label htmlFor="name">Card Number</label>
            <Input
              type="text"
              value={number}
              name="number"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
              validatedValue={(v) => SetNumber(v)}
            />
          </div>
        </div>
        <div className="formContainer">
          <div className="inputContainer">
            <label htmlFor="name">Card Name</label>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
              validatedValue={(v) => SetName(v)}
            />
          </div>
        </div>
        <div className="formContainer">
          <div className="inputContainer">
            <label htmlFor="name">Expiration Date</label>
            <Input
              type="text"
              name="expiry"
              value={date}
              onChange={(e) => {
                SetDate(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
              validatedValue={(v) => SetDate(v)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="name">CVV</label>
            <Input
              type="tel"
              name="cvc"
              value={cvc}
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
              validatedValue={(v) => SetCvc(v)}
            />
          </div>
        </div>
        <div className="sum">
          <span>Сумма Платежа</span>
          {sum}
        </div>
        <div className="error">{error && 'Заполните все поля'}</div>
        <button onClick={send} type="submit">
          <Link to={'/check'}>Отправить</Link>
        </button>
      </form>
    </>
  );
};
