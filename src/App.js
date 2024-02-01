//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Result from './components/ProjectResult';
const secretNum = Math.floor(Math.random() * 10) +1;

function App() {

const [term, setTerm] = useState('')

const handleChange = (e) => {
  setTerm(e.target.value)
}

  return (
    // <h1>Im react</h1>
    <div className='container'>
           <div className='head'>
                 <label htmlFor='term'>
                  Guess The Number Between 1 to 10 (answer: {secretNum})
                  </label>
           </div>
           <input
              id='term' type='text' name='term'
              onChange={handleChange}
           />
           <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
