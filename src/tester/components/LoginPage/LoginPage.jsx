import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../Common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import styleLoginPage from './LoginPageStyle.module.css';


const LoginForm = function (props) {
    return (<form onSubmit={props.handleSubmit} action="" method="post">
        <div>
            <div className={styleLoginPage.field_email + " " + styleLoginPage.field}>

                {/* <Field validate={[required]} type="text" placeholder={"Email"} name="email" component={Input} /> */}

                {createField(Input, { type: 'text' }, "email", "Email", [required])}

            </div>
        </div>
        <div>
            <div className={styleLoginPage.field_password + " " + styleLoginPage.field}>

                {createField(Input, { type: 'password' }, "password", "Password", [required])}

                {/* <Field validate={[required]} placeholder={"Password"} type="password" name="password" component={Input} /> */}

            </div>

        </div>
        <div>
            {/* <Field name="rememberMe" type="checkbox" component={Input} /> */}
            <div className={styleLoginPage.items}>
                {createField(Input, { type: 'checkbox' }, "rememberMe")} <span>remember me </span>
            </div>

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