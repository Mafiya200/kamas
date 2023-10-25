
import reportWebVitals from './reportWebVitals';
import state from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { addMessageUser } from './redux/state.js';
import './index.css';
import App from './App';
import { addSymbol } from './redux/state.js';
import { addMessageDialog } from './redux/state.js';
import { activeFunction } from './redux/state.js';



import { addUserMessage } from './redux/state.js';
import { createMessage } from './redux/state.js';



const root = ReactDOM.createRoot(document.getElementById('root'));


 let renderion = function (state) {

  root.render(
    <React.StrictMode>
      <App addMessageDialogF={addMessageDialog} appState={state} addSymbol={addSymbol} addMessageUser={addMessageUser}     addUserMessage={addUserMessage} createMessage={createMessage}/>
    </React.StrictMode>
  );
}

activeFunction(renderion);
renderion(state);





reportWebVitals();
