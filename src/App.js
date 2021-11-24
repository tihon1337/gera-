import React from "react";
import "./styles/app.css";
import Header from "./componetnts/header/Header.jsx";
import Navbar from "./componetnts/navbar/Navbar.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./componetnts/Menu/Dialogs/DialogsContainer";
import UsersContainer from "./componetnts/users/UsersContainer";
import ProfileContainer from "./componetnts/profile/ProfileContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-Wrapper">
                <Header/>
                <Navbar/>
                <div className='app-Wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer  />}/>
                    <Route path='/profile' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
