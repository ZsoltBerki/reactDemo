import { createStore } from 'redux'
import { exampleData } from './exampleData';

const initialState = {
  isFetching: false,
  animals: [],
  selectedAnimal: {name: 'Duck'}
};

const ANIMALS_REQUEST = 'ANIMALS_REQUEST';
const LOAD_ANIMALS = 'LOAD_ANIMALS';
const SELECT_ANIMAL = 'SELECT_ANIMAL';
const DELETE_SELECTION = 'DELETE_SELECTION';

const ACTION_HANDLERS = {
  [ANIMALS_REQUEST]: (state) => ({
    ...state,
    isFetching: true
  }),
  [LOAD_ANIMALS]: (state, {payload}) => ({
    ...state,
    isFetching: false,
    animals: payload
  }),
  [SELECT_ANIMAL]: (state, {payload}) => ({
    ...state,
    selectedAnimal: payload
  }),
  [DELETE_SELECTION]: (state) => ({
    ...state,
    selectedAnimal: {}
  }),
};

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

const createAction = type => (...args) => ({type: type, payload: (args => args)(...args)});

const store = createStore(reducer);

export const selectAnimal = animal => store.dispatch(createAction(SELECT_ANIMAL)(animal));




