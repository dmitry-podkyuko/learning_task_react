/* 
  При нажатии на кнопку React должен обновить state, но оба значения остаются неизменными.
  Будет ли React перерисовывать компонент? Если да, как этого избежать?
*/

const MyComponent = () => {
  const [state, setState] = useState({ name: "Alice", age: 25 });

  return (
    <>
      <button onClick={() => setState({ name: "Alice", age: 25 })}>
        Update State
      </button>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
    </>
  );
};