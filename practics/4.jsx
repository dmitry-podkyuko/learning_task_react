import { useState, useEffect } from 'react';

/*

 Задача должна выполнять следующее:
 1) При двойном клике в любом действии логировать действие пользователя (выводить что то в консоль)
 2) Отрисовать чек-боксы по массивам towns и marks. Учесть, что towns и marks - динамические массивы
 3) Запоминать выбранные чек-боксы

 Кандидату необходимо:
 1) Отрефакторите код
 2) При необходимости, исправить код на свое усмотрение

*/

const ListItem = (props) => {
  const { name, selectedCheckboxes, setSelectedCheckboxes } = props;
  const handleChange = (e) => {};

  return (
    <li>
      <input onChange={handleChange} />
      {name}
    </li>
  );
};

export default function App() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const towns = [
    { name: 'Moscow' },
    { name: 'St. Peterburg' },
    { name: 'London' },
  ];

  const marks = [{ name: 'Toyota' }, { name: 'Haval' }, { name: 'Nissan' }];
  return (
    <div>
      <ul>
        Посещенные Вами города:
        {}
      </ul>
      <ul>
        Желаемые Вами марки машин:
        {}
      </ul>
    </div>
  );
}
