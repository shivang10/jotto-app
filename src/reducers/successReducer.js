import { actionTypes } from "../actions";

const successReducerFunction = (state = false, action) => {
    switch (action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true;

        default:
            return state;
    }
}

export default successReducerFunction;
