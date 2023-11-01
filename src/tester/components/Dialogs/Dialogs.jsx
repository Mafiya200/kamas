import styleDialogs from './Dialogs.module.css';
import NamesContainer from './Names/NamesContainer';
import UserMessagesContainer from './UserMessages/UserMessageContainer';





const Dialogs = function (props) {
    return (
        <div className={`${styleDialogs.chat}`}>
            <div className={`${styleDialogs.chat__container} `}>
                <div className={styleDialogs.chat__body}>
                    <h2 className={styleDialogs.chat__title}>Dialogs</h2>
                    <div className={styleDialogs.chat__dialogs}>


                        <div className={styleDialogs.chat__names}>

                            <NamesContainer store={props.store} /* namesArray={props.dialogs.namesArray} */ />
                        </div>

                        <div className={styleDialogs.chat__userMessages}>
                            <UserMessagesContainer store={props.store} /* names={props.dialogs.namesArray} userMessages={props.dialogs.userMessages} dispatch={props.dispatch} */ /* createMessage={props.createMessage}
                                addUserMessage={props.addUserMessage} *//* nowMessage={props.dialogs.message} */
                              /* addMessageDialogF={props.addMessageDialogF} */
                             /* messageArr={props.dialogs.messageArr} */ /* createMessage={props.createMessage} */ />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;