import styleDialogs from './Dialogs.module.css';
import Names from './Names/Names';
import UserMessages from './UserMessages/UserMessages';





const Dialogs = function (props) {

    return (
        <div className={`${styleDialogs.chat}`}>
            <div className={`${styleDialogs.chat__container} `}>
                <div className={styleDialogs.chat__body}>
                    <h2 className={styleDialogs.chat__title}>Dialogs</h2>
                    <div className={styleDialogs.chat__dialogs}>


                        <div className={styleDialogs.chat__names}>

                            <Names namesArray={props.dialogs.namesArray} />
                        </div>

                        <div className={styleDialogs.chat__userMessages}>
                            <UserMessages  names={props.dialogs.namesArray} userMessages={props.dialogs.userMessages}  createMessage={props.createMessage}
addUserMessage={props.addUserMessage}/* nowMessage={props.dialogs.message} */
                              /* addMessageDialogF={props.addMessageDialogF} */
                             /* messageArr={props.dialogs.messageArr} */ /* createMessage={props.createMessage} *//>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;