import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import { getSecretWord as mockGetSecretWord } from './actions';
// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

const setup = () => {
    return mount(<App />);
}

test('testing will go in future', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
});


describe('get secret word', () => {

    beforeEach(() => {
        // clear the mock calls from previous tests
        mockGetSecretWord.mockClear();
    })

    test('getSecretWord on app mount', () => {
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1);

    });
    test('getSecretWord does not run on app update', () => {
        const wrapper = setup();
        mockGetSecretWord.mockClear();

        wrapper.setProps();

        expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
    });
});
