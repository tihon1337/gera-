import React from "react";
import "./styles/app.css";
import Header from "./componetnts/header/Header.jsx";
import Navbar from "./componetnts/navbar/Navbar.jsx";
import Profile from "./componetnts/profile/Profile.jsx";
import News from "./componetnts/Menu/News/News";
import Settings from "./componetnts/Menu/Settings/Settings";
import Music from "./componetnts/Menu/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componetnts/Menu/Dialogs/DialogsContainer";
import UsersContainer from "./componetnts/users/UsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-Wrapper">
                <Header/>
                <Navbar/>
                {/*<Music/>
                <Settings/>
                <News/>*/}
                <div className='app-Wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer  />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
