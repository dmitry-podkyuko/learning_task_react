/* 
  Что произойдёт после нажатия на кнопку?
*/

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(prev => prev + 1);
  };

  console.log("Rendered with count:", count);

  return <button onClick={handleClick}>Click</button>;
};