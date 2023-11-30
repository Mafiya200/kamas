import { combineReducers, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./Users-reduced";
import authReducer from "./auth-reducer";





///поидее тут создаётся _state
let reducers = combineReducers({
    auth:authReducer,
    NavBar:NavBarReducer,
    dialogs:dialogsReducer,
    profile:profileReducer,
    Users:UsersReducer,
});

let store = createStore(reducers);

export default store;