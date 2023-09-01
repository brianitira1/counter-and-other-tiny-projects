import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    if (count < 0) {
      alert('you cant go beyond zero')
    }
  };

  return (
    <div>
      <h1 style={{color:'green', textAlign: 'center', fontSize: '100px', marginLeft: -100}}>Simple</h1>
      <h>hello man</h>
      <p>Count: {count}</p>
      <button onClick={increment} style={{color: 'green', marginLeft: 100, backgroundColor: 'yellow', borderRadius: '20px', height: '100px', width: '100px'}}>Increment</button>
      <button onClick={decrement} style={{color: 'green', marginLeft: 100, backgroundColor: 'yellow', borderRadius: '20px', height: '100px', width: '100px'}}>Decrement</button>
    </div>
  );
}

export default Counter;
