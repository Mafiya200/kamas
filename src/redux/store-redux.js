import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import profileReducer from "./profile-reducer.ts";
import UsersReducer from "./Users-reduced.ts";
import authReducer from "./auth-reducer.ts";
import { thunk } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import LoginPageReducer from "./loginPage-reducer.ts";
import AppReducer from "./app-reducer.ts";



///поидее тут создаётся _state
let reducers = combineReducers({
    auth: authReducer,
    NavBar: NavBarReducer,
    dialogs: dialogsReducer,
    profile: profileReducer,
    Users: UsersReducer,
    LoginPage: LoginPageReducer,
    app:AppReducer,
    form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


/* let store = createStore(reducers, applyMiddleware(thunk)); */




export default store;