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

            <Profile store={props.store}  />

          </>} />













          <Route path='dialogs/*' element={<><Dialogs store={props.store}  />   </>} />
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


