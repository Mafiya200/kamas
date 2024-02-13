import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../Common/FormsControls/FormsControlsREDUX";
import { required } from "../../../utils/validators/validators";
import styleLoginPage from './LoginPageStyle.module.css';


const LoginForm = function (props) {

    return (<form onSubmit={props.handleSubmit}>
       
        <div>
            <div className={styleLoginPage.field_email + " " + styleLoginPage.field}>

                {/* <Field validate={[required]} type="text" placeholder={"Email"} name="email" component={Input} /> */}

                {createField(Input, { type: 'text' }, "email", "Email", [required])}

            </div>
        </div>
        <div>
            <div className={styleLoginPage.field_password + " " + styleLoginPage.field}>
                {createField(Input, { type: 'password' }, "password", "Password", [required])}
            </div>

        </div>

        <div>

            <div className={styleLoginPage.items}>
                {createField(Input, { type: 'checkbox' }, "rememberMe")} <span>remember me </span>
            </div>

        </div>
        {props.error && <div className={styleLoginPage.warningBlock}>
            <span className={styleLoginPage.warning}>{props.errorMessage}</span>
        </div>
        }

        <div>
            <button>Login</button>
        </div> 
        {props.captchaUrl && <img src={props.captchaUrl} />}
        <div>
            <div className={styleLoginPage.field_email + " " + styleLoginPage.field}>

                {/* <Field validate={[required]} type="text" placeholder={"Email"} name="email" component={Input} /> */}

                {createField(Input, { type: 'text' }, "captcha", "", [required])}

            </div>
        </div>
    </form>);
}










const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);








const LoginPage = function (props) {
    const onSubmit = ({ email, password, rememberMe,captcha }) => {
        props.login(email, password, rememberMe,captcha);
        /*  props.checkInputData(email, password, rememberMe); */

    }

    if (props.isAuth) {
        /* return <Navigate to={'/profile'} /> */
    }
    else {

        return (<div>
            <h1>Login</h1>
            <span>{props.message}</span>

            <LoginReduxForm errorMessage={props.errorMessage} onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            {/* {props.captchaUrl && <img src={props.captchaUrl}/>} */}
        </div>);
    }

}


export default LoginPage;