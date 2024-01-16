import React, { useState } from "react";
import { createStoreHook } from "react-redux";



const ProfileStatusWithHooks = (props) => {
    /* let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]; */

    let [inputContent, setInputContent] = useState(props.status);


    let [editMode, setEditMode] = useState(false);
    const activateEditMode = (e) => {

        setInputContent(props.status);
        setEditMode(true);


    }
    const onStatusChange = (e) => {
        setInputContent(e.target.value);

    }
    const closeEditMode = (e) => {
        setEditMode(false);
        console.log(e.target.value);
        props.updateProfileStatus(e.target.value);

    }



    let active = (props.status && !(props.status.startsWith(' ')));

    return (
        <div>{props.isAuth ? editMode
            ? <div><input onInput={onStatusChange} autoFocus onBlur={closeEditMode} value={inputContent} type="text"></input></div>
            : <div>
                {active ? <span onDoubleClick={activateEditMode}>{props.status}</span> : <span onDoubleClick={activateEditMode}>Статуса нет</span>}
            </div> : active ? <span onDoubleClick={activateEditMode}>{props.status}</span> : <span onDoubleClick={activateEditMode}>Статуса нет</span>}
            {/*  {this.state.editMode
                    ? <div><input onInput={this.onStatusChange} autoFocus onBlur={this.closeEditMode} value={this.state.status} type="text"></input></div>
                    : <div>
                        {this.props.status ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> : <span onDoubleClick={this.activateEditMode}>Статуса нет</span>}
                    </div>} */}


        </div >
    );


}
export default ProfileStatusWithHooks;