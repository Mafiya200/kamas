import './App.css';
import NavBarContainer from './tester/components/NavBar/NavBarContainer';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';
import UsersContainer from './tester/components/Users/UsersContainer';
import ProfileContainer from './tester/components/Profile/ProfileContainer';
import HeaderContainer from './tester/components/Header/HeaderContainer';
import LoginPageContainer from './tester/components/LoginPage/LoginPageContainer';
import DialogsContainer from './tester/components/Dialogs/DialogsContainer';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Spiner from './tester/components/Generalis/Spiner/Spiner';



class App extends React.Component {


  componentDidMount() {
    this.props.initializeApp();
  }




  render() {

    if (this.props.initialized) {

      return (


        <div className='app-wrapper'>

          <HeaderContainer />
          <NavBarContainer /* NavBar={props.appState.NavBar} */ />
          <div className='body-content'>

            <Routes>
              <Route path='mainPage' element={<>

                {/* <MainPage   */}

              </>} />
              <Route path='profile' element={<>

                <ProfileContainer /* store={props.store} */ />

              </>} />
              <Route path='profile/:userId/*' element={<>

                <ProfileContainer /* store={props.store} */ />

              </>} />

              <Route path='dialogs/*' element={<><DialogsContainer /* store={props.store} */ />   </>} />
              {<Route path='/users/*' element={<><UsersContainer /></>} />
              }          <Route path='news/*' element={<><News />   </>} />
              <Route path='music/*' element={<><Music />   </>} />
              <Route path='settings/*' element={<><Settings />   </>} />
              <Route path='login/*' element={<><LoginPageContainer /></>} />
            </Routes>

          </div>




        </div>

      );
    }
    else {
      return (
        <Spiner />
      );
    }

  }


}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
}

export default compose(connect(mapStateToProps, { initializeApp, }))(App);


