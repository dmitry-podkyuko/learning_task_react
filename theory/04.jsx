import { useEffect, useState, useLayoutEffect } from 'react';

/*
1. В какой последовательности выполнятся консоль логи?
2. А если в хуки опрокинуть []?
*/

const Child = ({ data }) => {
  useEffect(() => {
    console.log('1');
    return () => {
      console.log('2');
    };
  });

  console.log('3');

  useLayoutEffect(() => {
    console.log('4');
  });

  return <div>{data}</div>;
};

function Parent() {
  const [state, setState] = useState(1000);

  useEffect(() => {
    console.log(5);
    return () => {
      console.log(6);
    };
  });

  console.log(7);

  useLayoutEffect(() => {
    console.log(8);
    return () => {
      console.log(9);
    };
  });

  console.log(10);

  const handleClick = () => {
    console.log('11');
    setState((prevState) => {
      console.log(12);
      return prevState + 1;
    });
  };

  return (
    <>
      <div>
        <Child data={state} />
      </div>
      <button onClick={handleClick}>increment++</button>
    </>
  );
}

export default Parent;
