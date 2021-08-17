import React from 'react';
import { Provider } from 'react-redux';
import Symbol_observable from 'symbol-observable';
import Index from './components';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

