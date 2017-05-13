import { createStore } from 'redux'
import { exampleData } from './exampleData';

const initialState = {
  animals: exampleData,
  selectedAnimal: null,
  nameFilter: ''
};

const SELECT_ANIMAL = 'SELECT_ANIMAL';
const SET_ACTIVE_ANIMAL = 'SET_ACTIVE_ANIMAL';
const CHANGE_NAME_FILTER = 'CHANGE_NAME_FILTER';

const ACTION_HANDLERS = {
  [SELECT_ANIMAL]: (state, {payload}) => ({
    ...state,
    selectedAnimal: payload,
    nameFilter: '',
  }),
  [CHANGE_NAME_FILTER]: (state, {payload}) => ({
    ...state,
    nameFilter: payload
  })
};

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

const createAction = type => (...args) => ({type: type, payload: (args => args)(...args)});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const API = {
  selectAnimal: animal => createAction(SELECT_ANIMAL)(animal),
  setNameFilter: value => createAction(CHANGE_NAME_FILTER)(value)
};

