import styleUserMessage from './UserMessage.module.css';






const UserMessage = function (props) {

    return (
        <div className={styleUserMessage.userMessage}>
        <div className={styleUserMessage.userMessage__body}>
            <div className={styleUserMessage.userMessage__avatar}>
                <div className={styleUserMessage.UserMessage__image}>
                    <img src="#" alt="" />
                </div>
                <div className={styleUserMessage.UserMessage__name}>Dmitriy</div>
            </div>
            <div className={styleUserMessage.userMessage__text}>
                <p>{props.message}</p>
            </div>
        </div>
    </div>
    );
}


export default UserMessage;