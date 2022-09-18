import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
import reducersIndex from './reducers/reducersIndex';
import { QueryClient,QueryClientProvider } from 'react-query';
import thunk from 'redux-thunk';

import {ReactQueryDevTools} from 'react-query/devtools'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const stores= createStore(
  reducersIndex,
  /*{}*/
  composeEnhancer(applyMiddleware(thunk))
  )
let client   = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <Provider store={stores}>
      <App />
    </Provider>
    
  </QueryClientProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
