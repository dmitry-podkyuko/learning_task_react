import React, { useState } from 'react';

/**
 оптимизируйте компонент, уберите лишние перерисовки и отрефакторите код
 */

const ListItem = (props) => {
  console.log('render list item', props.text);
  return <li>{props.text}</li>;
};

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem text={item} key={index} />
      ))}
    </ul>
  );
};

const Button = ({ onClickHandle }) => {
  console.log('render button');
  return <button onClick={onClickHandle}>добавить</button>;
};

function App() {
  const [items, setItems] = useState(['One', 'Two', 'Three']);
  const [newItem, setNewItem] = useState('');
  const onClickHandle = () => setItems([...items, newItem]);
  const onChangeHandle = (e) => setNewItem(e.target.value);
  console.log('app render');
  return (
    <div>
      <input value={newItem} onChange={onChangeHandle} type='text' />
      <Button onClickHandle={onClickHandle}></Button>
      <List items={items} />
    </div>
  );
}

export default App;
