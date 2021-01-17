import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducerProfile from './profile-reducer';
import reducerDialogs from './dialogs-reducer';
import reducerSidebar from './sidebar-reducer';
import reducerFriends from "./friends-reducer";
import reducerAuth from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagesPage: reducerDialogs,
    friendsPage: reducerFriends,
    sidebar: reducerSidebar,
    auth: reducerAuth,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
