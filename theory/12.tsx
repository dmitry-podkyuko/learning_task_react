/*
  Какой будет финальный count после клика?
*/

const Example = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(prev => prev + 1);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};