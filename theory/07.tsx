/* 
  Определите очерёдность срабатывания хуков 'useEffect' в данном случае.
*/

const Test1 = () => {
  useEffect(() => { 
    console.log('Test1_Effect');
    return () => console.log('Test1_CleanUp')
  }, []);

  return <Test2 />
}

const Test2 = () => {
  useEffect(() => { 
    console.log('Test2_Effect');
    return () => console.log('Test2_CleanUp')
  }, []);

  return <></>
}

const App = () => <Test1 />