import { combineReducers, createStore } from "redux";
import NavBarReducer from "./NavBar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";





///поидее тут создаётся _state
let reducers = combineReducers({
    NavBar:NavBarReducer,
    dialogs:dialogsReducer,
    profile:profileReducer,
});

let store = createStore(reducers);

export default store;