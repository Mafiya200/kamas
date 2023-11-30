import './App.css';
import NavBarContainer from './tester/components/NavBar/NavBarContainer';
import Dialogs from './tester/components/Dialogs/Dialogs';

import { Link, Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';
import UsersContainer from './tester/components/Users/UsersContainer';
import ProfileContainer from './tester/components/Profile/ProfileContainer';
import HeaderContainer from './tester/components/Header/HeaderContainer';










function App(props) {

  return (


    <div className='app-wrapper'>

      <HeaderContainer />
      <NavBarContainer /* NavBar={props.appState.NavBar} */ />
      <div className='body-content'>

        <Routes>
          <Route path='profile/:userId?' element={<>

            <ProfileContainer /* store={props.store} */ />

          </>} />

          <Route path='dialogs/*' element={<><Dialogs /* store={props.store} */ />   </>} />
          {<Route path='/users/*' element={<><UsersContainer /></>} />
          }          <Route path='news/*' element={<><News />   </>} />
          <Route path='music/*' element={<><Music />   </>} />
          <Route path='settings/*' element={<><Settings />   </>} />
        </Routes>

      </div>




    </div>

  );
}

export default App;


