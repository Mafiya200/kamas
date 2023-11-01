import './App.css';
import Header from './tester/components/Header/Header';
import NavBar from './tester/components/NavBar/NavBar';
import Profile from './tester/components/Profile/Profile';
import Dialogs from './tester/components/Dialogs/Dialogs';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';










function App(props) {

  return (<BrowserRouter>


    <div className='app-wrapper'>

      <Header />
      <NavBar NavBar={props.appState.NavBar} />
      <div className='body-content'>

        <Routes>
          <Route path='profile/*' element={<>

            <Profile store={props.store} /* profile={props.appState.profile} dispatch={props.dispatch} */ /* addSymbol={props.addSymbol}
              addMessageUser={props.addMessageUser} */ />

          </>} />













          <Route path='dialogs/*' element={<><Dialogs store={props.store} /* dialogs={props.appState.dialogs} dispatch={props.dispatch} */ /* createMessage={props.createMessage}
            addUserMessage={props.addUserMessage} */ />   </>} />
          <Route path='/news/*' element={<><News />   </>} />
          <Route path='/music/*' element={<><Music />   </>} />
          <Route path='/settings/*' element={<><Settings />   </>} />
        </Routes>

      </div>




    </div>
  </BrowserRouter>
  );
}

export default App;


