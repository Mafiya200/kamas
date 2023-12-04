import { applyMiddleware, combineReducers, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./Users-reduced";
import authReducer from "./auth-reducer";
import { thunk } from "redux-thunk";





///поидее тут создаётся _state
let reducers = combineReducers({
    auth: authReducer,
    NavBar: NavBarReducer,
    dialogs: dialogsReducer,
    profile: profileReducer,
    Users: UsersReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;