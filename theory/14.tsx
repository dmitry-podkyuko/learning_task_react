/* 
  Что будет в консоли при первом рендере этого компонента?
  Что произойдёт при нажатии на кнопку?
*/

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect 1:", count);
  }, [count]);

  useEffect(() => {
    setCount(count + 1);
    console.log("Effect 2:", count);
  });

  return <button onClick={() => setCount(count + 1)}>Increase</button>;
};