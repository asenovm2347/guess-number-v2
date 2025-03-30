import {useState, useRef} from 'react';
import Info from './components/Info';
import Button from './components/Button';
import Input from './components/Input';

function secNumInfo(sN, gN, aN){
  let message;
  if(gN === null){
    message = 'Guess the number';
  }else if(gN === sN){
    message = 'Yes - ' + sN;
  }else if(aN > 0){
    if(gN < sN){
      message = 'Too small. Attempts left - ' + aN;
    }else{
      message = 'Too big. Attempts left - ' + aN;
    }
  }else{
    message = 'No - ' + sN;
  } 
  return message;
}

function App(){
  const [secNum, setSecNum] = useState( Math.trunc( Math.random() * 100 ) + 1 );
  const inp = useRef('');
  const [guess, setGuess] = useState(null);
  const [attempts, setAttempts] = useState(5);
  const info = secNumInfo(secNum, guess, attempts);

  function handleCheck(){
    setGuess( Number(inp.current.value) );
    setAttempts(prev => --prev);
    inp.current.value = '';
  }

  function handleNewGame(){
    setSecNum( Math.trunc( Math.random() * 100 ) + 1 );
    inp.current.value = '';
    setAttempts(5);
    setGuess(null);
  }

  return (
    <>
      <Info message={info} />
      <Input inpRef={inp} />
      <Button handleOnClick={handleCheck}>Check</Button>
      <Button handleOnClick={handleNewGame}>New Game</Button>
    </>
  );
}

export default App;
