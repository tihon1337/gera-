import React from "react";
import "./styles/app.css";
import Header from "./componetnts/header/Header.jsx";
import Navbar from "./componetnts/navbar/Navbar.jsx";
import Profile from "./componetnts/profile/Profile.jsx";
import Dialogs from "./componetnts/Menu/Dialogs/Dialogs.jsx";
import News from "./componetnts/Menu/News/News";
import Settings from "./componetnts/Menu/Settings/Settings";
import Music from "./componetnts/Menu/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";


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
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
