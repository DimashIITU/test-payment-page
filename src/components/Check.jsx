import React, { useContext } from 'react';
import { UserContext } from '../Context';

export const Check = () => {
  const { sum, name } = useContext(UserContext);
  return (
    <>
      <div className="t-a-l">Оплата прошла успешно</div>
      <div className="check_container">
        <span>Оплата на</span>
        {sum}
      </div>
      <div className="check_container">
        <span>Отправитель</span>
        {name}
      </div>
    </>
  );
};
