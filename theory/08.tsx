/* 
  Определите очерёдность срабатывания хуков 'useEffect' и 'useLayoutEffect' в данном случае.
*/

const Test1 = () => {
  useLayoutEffect(() => { 
    console.log('Test1_LayoutEffect');
    return () => console.log('Test1_LayoutCleanUp')
  }, []);

  useEffect(() => { 
    console.log('Test1_Effect');
    return () => console.log('Test1_CleanUp')
  }, []);

  return <Test2 />
}

const Test2 = () => {
  useLayoutEffect(() => { 
    console.log('Test2_LayoutEffect');
    return () => console.log('Test2_LayoutCleanUp')
  }, []);

  useEffect(() => { 
    console.log('Test2_Effect');
    return () => console.log('Test2_CleanUp')
  }, []);

  return <></>
}

const App = () => <Test1 />