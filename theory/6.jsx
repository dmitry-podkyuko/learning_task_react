// Если я буду вводить текст в input
// 1. Что выведется в консоли после введения первого символа
// 2. Что выведется в консоли после введения второго символа
// 3. Что выведется в консоли после введения третьего символа

// Почему так получается? 

function App() {
  const [state, setState] = useState('');

  const onChange = ({ target }) => {
    setState(target.value);
  };

  useEffect(() => {
    return () => {
      console.log('-->', state);
    };
  }, [state]);

  return (
    <div>
      <input type='text' value={state} onChange={onChange} />
    </div>
  );
}

export default App;
