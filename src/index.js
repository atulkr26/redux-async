import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { sagaMiddleware, configureStore } from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './sagas';

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
