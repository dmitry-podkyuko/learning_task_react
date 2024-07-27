import React, { useState, useEffect } from 'react';

/*
Задача: 
Найдите как можно больше ошибок
 */

// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const App = () => {
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  useEffect(async () => {
    setNumber(await fetchRandomNumber());

    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
  });

  return (
    <div>
      <div> Number: {number} </div>
      <div> Scroll: {scroll} </div>
    </div>
  );
};

export default App;

// Решение разобрано тут, перед ознакомлением решите его
// самостоятельно - https://habr.com/ru/articles/584924/
