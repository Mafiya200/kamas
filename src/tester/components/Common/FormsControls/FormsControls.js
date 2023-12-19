
import styleValidators from './FormsControls.module.css';

 export const TextArea = ({ input, meta, className, ...props }) => {

    return (
        <>
            <div className={styleValidators.errorTextArea}>
                {meta.touched ? meta.error ? <span className=''>{meta.error}</span> : '' : ''}

                <textarea   {...input} {...props} className={meta.touched ? meta.error ? className + ' ' + styleValidators.error : className : className}></textarea>
            </div>
        </>
    );
}
export const Input = ({ input, meta, className, ...props }) => {

    return (
        <>
            <div className={styleValidators.errorTextArea}>
                <div className={styleValidators.inputContainer}>
                {meta.touched ? meta.error ? <span className=''>{meta.error}</span> : '' : ''}
                <input  {...input} {...props} className={meta.touched ? meta.error ? className + ' ' + styleValidators.error : className : className} />

                </div>
            </div>
        </>
    );
} 

/* const FormControl = ({ input, meta, child, ...props }) => {
    return (
        <>
            <div className={styleValidators.errorArea}>
            {meta.touched ? meta.error ? <span className=''>{meta.error}</span> : '' : ''}
                 <div  className={meta.touched ? meta.error ? styleValidators.errorBlock+' '+ styleValidators.error : styleValidators.errorBlock : styleValidators.errorBlock}>
               
                    {props.children}
              </div> 

            </div>
        </>
    );
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (<FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>);
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>);
} */