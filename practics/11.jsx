/*
Что будет на экране через 1, 3, 5 секунд?
Почему так происходит, как это исправить?  
*/

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count - 1);
    }, 1000);
  }, []);
  return <div> {count} </div>;
};

export default App;
