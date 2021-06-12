import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessWords';
import Input from './Input';
import { getSecretWord } from './actions';

function App() {

  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);

  const secretWord = 'party';

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto-App</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
