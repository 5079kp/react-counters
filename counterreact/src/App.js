import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount]= useState(0);

 const handleIncerment = () =>
{
   setCount(count + 1)
}

const handleDecerment = () =>
{
  setCount (count - 1)
}
  return (
    <div className="App">
      <div>
        <p className="text">{count}</p>
        <div className='buttons'>
          <button className='btn1'onClick={handleIncerment}>Increment</button>
          <button className='btn2'onClick={handleDecerment}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
