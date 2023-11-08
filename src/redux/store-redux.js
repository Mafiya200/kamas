import { combineReducers, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import UsersReducer from "./Users-reduced";





///поидее тут создаётся _state
let reducers = combineReducers({
    NavBar:NavBarReducer,
    dialogs:dialogsReducer,
    profile:profileReducer,
    Users:UsersReducer,
});

let store = createStore(reducers);

export default store;