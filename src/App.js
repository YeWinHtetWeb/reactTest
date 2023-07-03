import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [input, setInputValue] = useState(0);
  const [output, setOuputValue] = useState(0);
  console.log(input);
  
  function clickEventHandling(value){
    // console.log(value);
    if(value == "AC"){
      setInputValue(0);
      setOuputValue(0);
    }else if(value == "DEL"){
      setInputValue(value . slice())
    }else if(value == '='){
      setOuputValue("= " + eval(input));
    }else{
      input == 0 ? setInputValue(value) : setInputValue(input + value);
    }
  }
  
  return (
    <div className="App">
      <div className='calculator'>
        <Input input={input} />
        <Output output={output} />
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;
