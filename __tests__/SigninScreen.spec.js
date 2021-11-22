import 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, fireEvent} from '@testing-library/react-native';

import SigninScreen from '../source/modules/signin/SigninScreen';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Signin', () => {
  const setUsername = jest.fn();
  const setDisabled = jest.fn();
  const setAnimating = jest.fn();
  const onUsernameEntered = jest.fn();
  const onPressLogin = jest.fn();
  const mockNavigate = jest.fn();
  const mockedParams = {
    route: {params: {dismiss: false}},
    navigation: {navigate: mockNavigate},
  };

  it('renders the all controls', async () => {
    const INITIAL_STATE = {
      addressData: {
        balance: 0,
        transactions: null,
        error: null,
        username: '',
      },
    };
    const mockStore = configureStore([]);
    const store = mockStore(INITIAL_STATE);

    const component = (
      <NavigationContainer>
        <Provider store={store}>
          <SigninScreen
            {...mockedParams}
            setUsername={setUsername()}
            setDisabled={setDisabled()}
            setAnimating={setAnimating()}
            onUsernameEntered={onUsernameEntered()}
            onPressLogin={onPressLogin()}
          />
        </Provider>
      </NavigationContainer>
    );

    const {findByText, getByTestId} = render(component);
    expect(await getByTestId('welcome_text')).toBeTruthy();
    expect(await getByTestId('username_text')).toBeTruthy();
    expect(await getByTestId('login_button')).toBeTruthy();
    expect(await findByText('Welcome to JobCoin')).toBeTruthy();
    expect(setDisabled).toHaveBeenCalled();
  });

  it('type username - Press login button -- login screen ', async () => {
    const INITIAL_STATE = {
      addressData: {
        balance: 0,
        transactions: null,
        error: null,
        username: '',
      },
    };
    const mockStore = configureStore([]);
    const store = mockStore(INITIAL_STATE);

    const component = (
      <NavigationContainer>
        <Provider store={store}>
          <SigninScreen
            {...mockedParams}
            setUsername={setUsername()}
            setDisabled={setDisabled()}
            setAnimating={setAnimating()}
            onUsernameEntered={onUsernameEntered()}
            onPressLogin={onPressLogin()}
          />
        </Provider>
      </NavigationContainer>
    );

    const {findByText, getByTestId} = render(component);
    expect(await getByTestId('welcome_text')).toBeTruthy();
    expect(await getByTestId('username_text')).toBeTruthy();
    expect(await getByTestId('login_button')).toBeTruthy();
    expect(await findByText('Welcome to JobCoin')).toBeTruthy();
    fireEvent.changeText(getByTestId('username_text'), 'srithar');
    expect(setDisabled).toHaveBeenCalled();
    expect(onUsernameEntered).toHaveBeenCalled();
    expect(setUsername).toHaveBeenCalled();

    const login_button = getByTestId('login_button');
    fireEvent(login_button, 'press');
    expect(onPressLogin).toHaveBeenCalled();
    const actions = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions[0].type).toEqual('SET_USERNAME');
    expect(actions[0].username).toEqual('srithar');
    expect(actions[1].type).toEqual('FETCH_ADDRESS_DATA');
    expect(actions[1].username).toEqual('srithar');
    expect(setAnimating).toHaveBeenCalled();
  });

  it('navigate home screen - when success response ', async () => {
    const INITIAL_STATE = {
      addressData: {
        balance: 0,
        transactions: [],
        error: null,
        username: '',
      },
    };
    const mockStore = configureStore([]);
    const store = mockStore(INITIAL_STATE);

    const component = (
      <NavigationContainer>
        <Provider store={store}>
          <SigninScreen
            {...mockedParams}
            setUsername={setUsername()}
            setDisabled={setDisabled()}
            setAnimating={setAnimating()}
            onUsernameEntered={onUsernameEntered()}
            onPressLogin={onPressLogin()}
          />
        </Provider>
      </NavigationContainer>
    );

    const {findByText, getByTestId} = render(component);
    expect(await getByTestId('welcome_text')).toBeTruthy();
    expect(await getByTestId('username_text')).toBeTruthy();
    expect(await getByTestId('login_button')).toBeTruthy();
    expect(await findByText('Welcome to JobCoin')).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith('HomeScreen');
    expect(setAnimating).toHaveBeenCalled();
  });
  it('navigate home screen - when Failure response ', async () => {
    const INITIAL_STATE = {
      addressData: {
        balance: 0,
        transactions: null,
        error: 'failure occured',
        username: '',
      },
    };
    const mockStore = configureStore([]);
    const store = mockStore(INITIAL_STATE);

    const component = (
      <NavigationContainer>
        <Provider store={store}>
          <SigninScreen
            {...mockedParams}
            setUsername={setUsername()}
            setDisabled={setDisabled()}
            setAnimating={setAnimating()}
            onUsernameEntered={onUsernameEntered()}
            onPressLogin={onPressLogin()}
          />
        </Provider>
      </NavigationContainer>
    );

    const {findByText, getByTestId} = render(component);
    expect(await getByTestId('welcome_text')).toBeTruthy();
    expect(await getByTestId('username_text')).toBeTruthy();
    expect(await getByTestId('login_button')).toBeTruthy();
    expect(await findByText('Welcome to JobCoin')).toBeTruthy();
    expect(setAnimating).toHaveBeenCalled();
  });
});
