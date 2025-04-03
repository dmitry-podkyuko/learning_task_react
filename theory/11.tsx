/* 
  Какой будет финальный count после всех вызовов setCount?
  Почему так происходит и как исправить, если требуется увеличение на 3?
*/

const Counter = () => {
  const [count, setCount] = React.useState(0);

  setTimeout(() => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }, 1000);

  return <div>Count: {count}</div>;
};