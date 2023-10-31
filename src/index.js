
import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';







const root = ReactDOM.createRoot(document.getElementById('root'));


let renderion = function (state) {
console.log(state);


  root.render(
    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)}
       /* createMessage={store.createMessage.bind(store)}
       addUserMessage={store.addUserMessage.bind(store)}
       addSymbol={store.addSymbol.bind(store)}
       addMessageUser= {store.addMessageUser.bind(store)} */ />
    </React.StrictMode>
  );
}


renderion(store.getState());


store.subscribe(function(){
  renderion(store.getState());
});






































reportWebVitals();
