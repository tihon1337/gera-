import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode(){

    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() =>{alert('hey')}}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status}/>
                </div>
                }
            </div>


        );
    }
}

export default ProfileStatus;
