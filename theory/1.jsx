// Что будет в консоли при клике на кнопку 5 раз, почему?

import { useEffect, useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);

    return () => {
      console.log(counter);
    };
  });

  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +++
      </button>
    </div>
  );
};

export default App;
