import React from 'react';
import {} from 'react-native';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};
export default App;
