import React, { ChangeEvent, FC, FocusEvent, MouseEvent, useState } from "react";
/* import { createStoreHook } from "react-redux";
 */


type propsType = {
    isAuth: boolean,
    userId: number | undefined,
    profileStatus: string | undefined,
    status?: string,
    updateProfileStatus: (status: string | undefined | null) => void,
    getProfileStatus: (userId: number) => void,

};


const ProfileStatusWithHooks: FC<propsType> = (props) => {


    /* let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]; */

    let [inputContent, setInputContent] = useState(props.status);






    let [editMode, setEditMode] = useState(false);


    const activateEditMode = (e: MouseEvent<HTMLButtonElement>) => {

        setInputContent(props.status);
        setEditMode(true);


    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputContent(e.target.value);

    }
    const closeEditMode = (e:FocusEvent<HTMLInputElement>) => {
        setEditMode(false);

        props.updateProfileStatus(e.target.value);

    }



    let active = (props.status && !(props.status.startsWith(' ')));
    let caseActive = active ? <span onBlur={closeEditMode} onDoubleClick={activateEditMode}>{props.status}</span> : <span onDoubleClick={activateEditMode}>Статуса нет</span>;
    return (
        <div>{props.isAuth ? editMode
            ? <div><input onInput={onStatusChange} autoFocus onBlur={closeEditMode} value={inputContent} type="text"></input></div>
            : <div>
                {caseActive}
            </div> : caseActive}
            {/*  {this.state.editMode
                    ? <div><input onInput={this.onStatusChange} autoFocus onBlur={this.closeEditMode} value={this.state.status} type="text"></input></div>
                    : <div>
                        {this.props.status ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> : <span onDoubleClick={this.activateEditMode}>Статуса нет</span>}
                    </div>} */}


        </div >
    );
}

export default ProfileStatusWithHooks;