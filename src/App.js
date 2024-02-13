import './App.css';
import NavBarContainer from './tester/components/NavBar/NavBarContainer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import News from './tester/components/News/News';
import Music from './tester/components/Music/Music';
import Settings from './tester/components/Settings/Settings';
import UsersContainer from './tester/components/Users/UsersContainer';
import LoginPageContainer from './tester/components/LoginPage/LoginPageContainer';
/* import DialogsContainer from './tester/components/Dialogs/DialogsContainer';
 */
/* import ProfileContainer from './tester/components/Profile/ProfileContainer';*/
import HeaderContainer from './tester/components/Header/HeaderContainer';
import { connect } from 'react-redux';

import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer.ts';
import Spiner from './tester/components/Generalis/Spiner/Spiner';
import { Suspense } from 'react';




const DialogsContainer = React.lazy(() => import('./tester/components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./tester/components/Profile/ProfileContainer'));


class App extends React.Component {
  handleError = (rejects) => {
    console.log(rejects);
  }


  componentDidMount() {
    this.props.initializeApp();

    /*  this.handleError(); */

    window.addEventListener('rejectionhandled', this.handleError);



  }
  componentWillUnmount() {
    window.removeEventListener('rejectionhandled', this.handleError);
  }




  render() {

    if (this.props.initialized) {

      return (


        <div className='app-wrapper'>

          <HeaderContainer />
          <NavBarContainer /* NavBar={props.appState.NavBar} */ />
          <div className='body-content'>


            <Suspense fallback={<Spiner />}>
              <Routes>

                <Route path='mainPage' element={<>

                  {/* <MainPage   */}

                </>} />
                <Route path='profile' element={<>

                  <ProfileContainer /* store={props.store} */ />

                </>} />
                <Route path='profile/:userId/*' element={<>
                  {/*  <React.Suspense fallback={<div>`load`</div>}> */}
                  <ProfileContainer /* store={props.store} */ />
                  {/* </React.Suspense> */}
                </>} />

                <Route path='dialogs/*' element={<>  <DialogsContainer /* store={props.store} */ /> </>} />


                {/* <React.Suspense fallback={<div>`text`</div>}>
              
              </React.Suspense>  */}





                {<Route path='/users/*' element={<><UsersContainer /></>} />
                }          <Route path='news/*' element={<><News />   </>} />
                <Route path='music/*' element={<><Music />   </>} />
                <Route path='settings/*' element={<><Settings />   </>} />
                <Route path='login/*' element={<><LoginPageContainer /></>} />
                {/* <Route path='/kamas' element={<ProfileContainer />} /> */}
                <Route path='/' element={<ProfileContainer />} />
              </Routes>
            </Suspense>


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


