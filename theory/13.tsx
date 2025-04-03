/* 
  В данном коде Child будет ререндериться при каждом рендере Parent.
  Как оптимизировать этот код так, чтобы Child не ререндерился при каждом обновлении count?
*/

const Child = ({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
    </>
  );
};