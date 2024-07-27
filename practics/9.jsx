/*
При нажатии на кнопку счетчик должен увеличиваться на 2, но увеличивается на 1, решите проблему
*/

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <div> {count} </div>
      <button onClick={handleClick}>increment +2</button>
    </div>
  );
};

export default App;