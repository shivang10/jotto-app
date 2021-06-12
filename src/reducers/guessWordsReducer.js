import { actionTypes } from '../actions';

const guessedWordsReducer = (state = [], action) => {
    switch (action.actionTypes) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
}


export default guessedWordsReducer;
