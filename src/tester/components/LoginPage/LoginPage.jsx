import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import { Navigate } from "react-router-dom";
import styleLoginPage from './LoginPageStyle.module.css';


const LoginForm = function (props) {
    return (<form onSubmit={props.handleSubmit} action="" method="post">
        <div><Field validate={[required]} placeholder={"Email"} name="email" component={Input} /></div>
        <div><Field validate={[required]} placeholder={"Password"} type="password" name="password" component={Input} /></div>
        <div>
            <Field name="rememberMe" type="checkbox" component={Input} /> remember me
        </div>
        {props.error && <div className={styleLoginPage.warningBlock}>
            <span className={styleLoginPage.warning}>{props.errorMessage}</span>
        </div>}

        <div>
            <button type="submit">Login</button>
        </div>
    </form>);
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


const LoginPage = function (props) {
    const onSubmit = ({ email, password, rememberMe }) => {
        props.login(email, password, rememberMe);
        /*  props.checkInputData(email, password, rememberMe); */

    }
    if (props.isAuth) {
        /* return <Navigate to={'/profile'} /> */
    }
    else {
        return (<div>
            <h1>Login</h1>
            <span>{props.message}</span>

            <LoginReduxForm errorMessage={props.errorMessage} onSubmit={onSubmit} />
        </div>);
    }

}




export default LoginPage;