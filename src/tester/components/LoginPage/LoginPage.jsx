import { Field, reduxForm } from "redux-form";


const LoginForm = function (props) {
   


    return (<form onSubmit={props.handleSubmit} action="" method="post">
        <div><Field placeholder={"Login"} name="Login" component={"input"} /></div>
        <div><Field placeholder={"Password"} name="Password" component={"input"} /></div>
        <div>
            <Field name="rememberMe" type="checkbox" component={'input'} /> remember me
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>);
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


const LoginPage = function (props) {
    const onSubmit = (formData) => {

        props.checkInputData(formData.Login, formData.Password, formData.rememberMe);

    }
    return (<div>
        <h1>Login</h1>
        <span>{props.message}</span>
        
        <LoginReduxForm onSubmit={onSubmit} />
    </div>);
}



export default LoginPage;