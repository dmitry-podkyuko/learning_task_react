/* 
  Какая проблема есть в этом коде?
*/

const List = () => {
  const [items, setItems] = useState(["A", "B", "C"]);

  return (
    <>
      <button onClick={() => setItems(items.slice(1))}>Remove first</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};