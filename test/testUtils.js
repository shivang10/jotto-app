/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from "check-prop-types";
import { createStore } from 'redux';
import rootReducer from '../src/reducers';


export const storeFactory = (initialState) => {
    createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'props',
        component.name
    );
    expect(propError).toBeUndefined();
};
