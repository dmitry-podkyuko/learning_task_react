/* 
  Почему этот код вызывает ошибку?
*/

const Child = ({ ref }) => {
  return <input ref={ref} />;
};

const Parent = () => {
  const inputRef = useRef(null);

  return <Child ref={inputRef} />;
};