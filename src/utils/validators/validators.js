
export const required = (value) => {

    if (value) {
        return undefined;
    }
    else {
        return "the FIELD is required";

    }
}
export const maxLength30 = (value) => {

    if (value.length <= 30) {
        return undefined;
    }
    else {
        return "the FIELD is required";

    }
}

export const maxLengthCreator = (maxLength) => {
    return (function (value) {
        if (value.length <= maxLength) {
            return undefined;


        }
        else{
            return `Max length is ${maxLength}`;
    
        }
        

    });
}