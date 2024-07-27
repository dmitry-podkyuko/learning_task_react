import { useState } from 'react';

/**
 Сделайте так, что бы
 1. При нажатии на заглушку, Item НЕ перерисовывался, ведь он от нее не зависит
 2. При нажатии на changeAge Item перерисовывался
 */

function Item(props) {
  console.log('item rendered');

  return (
    <div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  );
}

function App() {
  const [state, setState] = useState({ name: 'Anna', age: 12 });
  const [_, setЗаглушка] = useState(0);

  const changeAge = (newAge) =>
    setState(() => {
      state.age = newAge;
      return state;
    });

  console.log('app rendered');
  return (
    <div>
      <button
        onClick={() => {
          changeAge(Math.random());
        }}
      >
        changeAge
      </button>
      <button
        onClick={() => {
          setЗаглушка(Math.random());
        }}
      >
        заглушка
      </button>
      <Item user={state}></Item>
    </div>
  );
}

export default App;
