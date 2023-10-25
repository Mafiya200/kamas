import styleUserMessage from './UserMessage.module.css';






const UserMessage = function (props) {

    return (
        <div className={styleUserMessage.userMessage}>
        <div className={styleUserMessage.userMessage__body}>
        <div className={styleUserMessage.userMessage__item}>
        <div className={styleUserMessage.userMessage__name}>Dmitriy</div>
        <div className={styleUserMessage.userMessage__avatar}>
                <div className={styleUserMessage.userMessage__image}>
                    <img src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-panda-v-ochkah.jpg" alt="" />
                </div>
                
            </div>
            <div className={styleUserMessage.userMessage__text}>
                <p>{props.message}</p>
            </div>
        </div>
            
        </div>
    </div>
    );
}


export default UserMessage;