/* 
  Что будет в консоли при первом рендере компонента App?
*/

const MyComponent = () => {
  useEffect(() => {
    console.log("Effect init");
  }, []);

  return <div>Hello</div>;
};

const App = () => (
  <StrictMode>
    <Example />
  </StrictMode>
);