import React from 'react';
import ReactDOM from 'react-dom/client';
import { addMessageUser } from './redux/state.js';
import './index.css';
import App from './App';



export let render = function(state){
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <App  appState = {state} addMessageUser = {addMessageUser}/>
    </React.StrictMode>
  );
  
}