/* 
  Что произойдёт при выполнении этого кода?
  Из-за чего это происходит?
*/

const MyComponent = () => {
  const [count, setCount] = useState(0);

  if (count > 0) {
    const [otherState, setOtherState] = useState(() => { console.log("Hello") }, []);
  }

  return (
    <button onClick={() => setCount(count + 1)}>Increase</button>
  );
};