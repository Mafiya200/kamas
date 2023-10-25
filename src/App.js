import logo from './logo.svg';
import './App.css';
import Header from './tester/components/Header/Header';
import NavBar from './tester/components/NavBar/NavBar';
import Profile from './tester/components/Profile/Profile';
import Dialogs from './tester/components/Dialogs/Dialogs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';









function App(props) {
return (<BrowserRouter>



    <div className='app-wrapper'>

      <Header />
      <NavBar NavBar = {props.appState.NavBar} />
      <div className='body-content'>

        <Routes>
          <Route path='/profile/*' element={<><Profile addMessageUser={props.addMessageUser} postArr={props.appState.postArr} />   </>} />
          <Route path='/dialogs/*' element={<><Dialogs namesArray={props.appState.namesArray} messageArr={props.appState.messageArr} />   </>} />
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


