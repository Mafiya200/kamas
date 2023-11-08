import './App.css';
import Header from './tester/components/Header/Header';
import NavBarContainer from './tester/components/NavBar/NavBarContainer';
import Profile from './tester/components/Profile/Profile';
import Dialogs from './tester/components/Dialogs/Dialogs';

import { Link, Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';
import UsersContainer from './tester/components/Users/UsersContainer';










function App(props) {

  return (


    <div className='app-wrapper'>

      <Header />
      <NavBarContainer /* NavBar={props.appState.NavBar} */ />
      <div className='body-content'>

        <Routes>
          <Route path='profile/*' element={<>

            <Profile /* store={props.store} */ />

          </>} />
          <Route path='dialogs/*' element={<><Dialogs /* store={props.store} */ />   </>} />
          {<Route path='users/*' element={<><UsersContainer /></>} />
          }          <Route path='news/*' element={<><News />   </>} />
          <Route path='music/*' element={<><Music />   </>} />
          <Route path='settings/*' element={<><Settings />   </>} />
        </Routes>

      </div>




    </div>

  );
}

export default App;


