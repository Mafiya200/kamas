
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';







const root = ReactDOM.createRoot(document.getElementById('root'));


let renderion = function (state) {




  root.render(
    <React.StrictMode>
      <App appState={state}
       createMessage={store.createMessage.bind(store)}
       addUserMessage={store.addUserMessage.bind(store)}
       addSymbol={store.addSymbol.bind(store)}
       addMessageUser= {store.addMessageUser.bind(store)} />
    </React.StrictMode>
  );
}



store.activeFunction(renderion);


renderion(store.getState());



































reportWebVitals();
