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

                            <Names namesArray={props.namesArray} />
                        </div>

                        <div className={styleDialogs.chat__userMessages}>
                            <UserMessages namesArray={props.namesArray} messageArr={props.messageArr} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;