import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';











const UserMessages = function (props) {




    let newAllMesages = props.namesArray.map(function (item) {


        let nameItem = String(item.name);
    
    
        
        return (
    
            <Route key={1} path={nameItem} element={
                <>
    

                    {props.messageArr[nameItem]}
    
                </>}>
            </Route>
    
        );
    });




    return (
        <div className={styleUserMessages.userMessages}>
            <div className={styleUserMessages.userMessages__body}>


                <Routes>


                    {newAllMesages}


                </Routes>


            </div>
        </div>
    );
}


export default UserMessages;