import {useState, useRef} from 'react';
import Info from './components/Info';
import Button from './components/Button';
import Input from './components/Input';

function App(){
  const [secNum, setSecNum] = useState( Math.trunc( Math.random() * 100 ) + 1 );
  const inp = useRef('');
  const [guess, setGuess] = useState(null);
  const secNumInfo = guess === null ? 'Guess the number' : guess === secNum ? 'Yes' : 'No - ' + secNum;

  function handleCheck(){
    setGuess( Number(inp.current.value) );
  }

  function handleNewGame(){
    setSecNum( Math.trunc( Math.random() * 100 ) + 1 );
    inp.current.value = '';
    setGuess(null);
  }

  return (
    <>
      <Info message={secNumInfo} />
      <Input inpRef={inp} />
      <Button handleOnClick={handleCheck}>Check</Button>
      <Button handleOnClick={handleNewGame}>New Game</Button>
    </>
  );
}

export default App;
