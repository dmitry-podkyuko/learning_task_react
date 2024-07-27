import React, { useState, FC } from 'react';
import './styles.css';

/*

Задача
1. Отрефакторите код

2. нужно сделать так, чтобы при клике toggle page кол-во кликов
сбрасывалось на ноль, предложи два разных решения (намекаю на key)
протипизируй компонент

*/

const Clicked = ({ count }) => {
  return <p>Clicked: {count}</p>;
};

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click me!</button>
      <Clicked count={count} />
    </div>
  );
}

const Page = ({ page }: { page: string }) => {
  return (
    <div>
      page: {page}
      <Counter />
    </div>
  );
};

export const SwitchView = () => {
  const [viewState, setViewState] = useState('one');

  return (
    <div className='wrapper'>
      <button
        onClick={() => setViewState((prev) => (prev === 'one' ? 'two' : 'one'))}
      >
        toggle page
      </button>
      <Page page={viewState} />
    </div>
  );
};

export default SwitchView;
