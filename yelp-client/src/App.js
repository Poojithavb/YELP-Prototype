import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
