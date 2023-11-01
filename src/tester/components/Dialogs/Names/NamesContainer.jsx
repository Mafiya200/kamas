import Names from './Names';



const NamesContainer = function (props) {

    let state = props.store.getState().dialogs.namesArray;

    


    return ( <Names namesArray={state}/>
       
    );
}


export default NamesContainer;