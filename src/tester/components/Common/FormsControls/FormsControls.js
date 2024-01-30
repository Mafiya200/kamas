import { Field } from 'redux-form';
import styleValidators from './FormsControls.module.css';

export const TextArea = ({ input, meta, className, ...restprops }) => {
    return (
        <>
            {/* <div className={styleValidators.errorTextArea}>
                {meta.touched ? meta.error ? <span className=''>{meta.error}</span> : '' : ''}

                <textarea   {...input} {...props} className={meta.touched ? meta.error ? className + ' ' + styleValidators.error : className : className} />
            </div> */}
            <FormControl meta={meta} >
                <textarea   {...input} {...restprops} className={meta.touched ? meta.error ? className + ' ' + styleValidators.error : className : className} />
            </FormControl>
        </>
    );
}
export const Input = ({ input, meta, className, ...restprops }) => {
    return (
        <>
            {/*  <div className={styleValidators.errorTextArea}>
                <div className={styleValidators.inputContainer}>
                    {meta.touched ? meta.error ? <span className=''>{meta.error}</span> : '' : ''}
                    <input  {...input} {...props} className={meta.touched ? meta.error ? className + ' ' + styleValidators.error : className : className} />

                </div>
            </div> */}
            <FormControl meta={meta} className={className}>
                <input {...input} {...restprops} />
            </FormControl>
        </>
    );
}


const FormControl = ({ meta: { touched, error }, children, className }) => {
    return <div >
        <div className={styleValidators.errorTextArea}>

            {touched ? error ? <span className={styleValidators.error_text}>{error}</span> : '' : ''}
            <div className={touched ? error ? className + ' ' + styleValidators.error : className : className}>
                {children}

            </div>


        </div>
    </div >

}

export const createField = (Component, props={}, name='',   placeholder = false, validate=null) => {

    /* <Field validate={[required]} placeholder={"Email"} name="email" component={Input} /> */
    /* <Field validate={[required]} placeholder={"Password"} type="password" name="password" component={Input} /> */
    /* <Field name="rememberMe" type="checkbox" component={Input} /> */


    return <Field name={name} placeholder={placeholder} component={Component} validate={validate} {...props} />;
}