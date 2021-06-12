import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessWords';
import Input from './Input';
import { getSecretWord } from './actions';

function App() {

  const dispatch = useDispatch();

  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord);

  useEffect(() => {
    dispatch(getSecretWord());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto-App</h1>
      <div>The secret word is: {secretWord}</div>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
