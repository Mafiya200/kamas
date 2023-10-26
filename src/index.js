
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';








const root = ReactDOM.createRoot(document.getElementById('root'));


 let renderion = function (state) {

  root.render(
    <React.StrictMode>
      <App  appState={state} />
    </React.StrictMode>
  );
}



state.activeFunction(renderion);


state.renderion(state);



































reportWebVitals();
