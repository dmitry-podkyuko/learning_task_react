/*
  Почему при клике на кнопку компонент Child ререндерится, даже если React.memo используется?
*/

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </>
  );
};