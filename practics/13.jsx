import { useState } from 'react';

/**
 При нажатии на инкремент, ребенок перерисовывается, хотя не должен, ведь он не зависит от state
 уберите лишние рендеры
 */

function Children({ handler }) {
  console.log('children rendered');

  return <button onClick={handler}>++</button>;
}

function App() {
  const [state, setState] = useState(0);
  const handler = () => setState(state + 1);

  return (
    <div>
      <div>{state}</div>
      <Children handler={handler} />
    </div>
  );
}

export default App;
