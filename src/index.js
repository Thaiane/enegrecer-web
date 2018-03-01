import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import configureStore from './store';
import Rotas from './routes/Routes'
import registerServiceWorker from './utils/registerServiceWorker';


import './assets/styles/index.css';
import './css/principal.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Rotas />
  </Provider>
  ,
  document.getElementById('root'),
);

registerServiceWorker();
