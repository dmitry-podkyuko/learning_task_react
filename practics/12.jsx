import React from 'react';

/*
  Задача: Создать переключатель темы (светлая/темная):

- Реализуйте функциональность для переключения между темной и светлой темами в приложении.
- Используйте контекст React для управления текущей темой и примените её ко всем компонентам.
*/

const Task = () => {
  // Стили для компонента
  const themeStyles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    padding: '10px',
    margin: '10px',
  };

  return <div>проверка темы</div>;
};

export default App;
