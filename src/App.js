import React from 'react';
import './App.scss';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Route, Redirect} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {authMe} from "./redux/auth-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "./HOC/withAuthRedirect";


class App extends React.Component {

    componentDidMount() {
        this.props.authMe();
    };

    render() {

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/'
                           render={() => <Redirect to={"/profile"}/>}/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friendsPage' render={() =>
                        <FriendsPage/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>);
    }
}

// let mapStateToProps = state => {
//     return {
//         isAuth: state.auth.isAuth,
//         login: state.auth.login
//     }
// };

export default compose(
    // withAuthRedirect,
    connect(null,
        {
            authMe
        })
)(App);
