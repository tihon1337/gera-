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


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-Wrapper">
                <Header/>
                <Navbar/>
                <div className='app-Wrapper-content'>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer  store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
