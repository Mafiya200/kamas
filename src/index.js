
import reportWebVitals from './reportWebVitals';
import store from './redux/store-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';






const root = ReactDOM.createRoot(document.getElementById('root'));




  root.render(
    <React.StrictMode>
      <BrowserRouter basename='/'>
        <Provider store={store}>
          <App  /* store={store} appState={state} */ />
        </Provider>

      </BrowserRouter>
    </React.StrictMode>
  );



///как только меняется _state срабатывает эта функция
/* store.subscribe(function () {
  renderion(store.getState());
}); */






































reportWebVitals();
