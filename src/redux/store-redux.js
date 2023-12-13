import { applyMiddleware, combineReducers, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./Users-reduced";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer, reducer } from "redux-form";
import LoginPageReducer from "./loginPage-reducer";



///поидее тут создаётся _state
let reducers = combineReducers({
    auth: authReducer,
    NavBar: NavBarReducer,
    dialogs: dialogsReducer,
    profile: profileReducer,
    Users: UsersReducer,
    LoginPage: LoginPageReducer,
    /* form: formReducer, */
    form:formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;