// Что будет в консоли при клике на кнопку 5 раз, почему?

import { useEffect, useState } from 'react';

const App = () => {
  const [counter] = useState(0);

  useEffect(() => {
    console.log(counter);

    return () => {
      console.log(counter);
    };
  }, []);

  return (
    <div>
      <div>{counter}</div>
      <button>+++</button>
    </div>
  );
};

export default App;
