import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from "./component/reducer.js"
import {StateProvider} from "./component/StateProvider.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />    
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
