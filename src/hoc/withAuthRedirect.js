import {Redirect} from "react-router-dom";
import Dialogs from "../componetnts/Menu/Dialogs/Dialogs";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect =(state)=>({
    isAuth: state.auth.isAuth
})
export let withAuthRedirect = (Component ) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='login'/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}