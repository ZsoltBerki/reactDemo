import React, {PropTypes} from 'react';
import AnimalsViewContainer from './containers/AnimalsViewContainer';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { reducer } from './module/index';
import { createStore } from 'redux'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AnimalsViewContainer />
  </Provider>,
  document.getElementById('app')
);