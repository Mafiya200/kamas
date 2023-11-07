import { connect } from 'react-redux';
import Names from './Names';




const mapStateToProps = function(state){
    return({
        namesArray:state.dialogs.namesArray,
    });
}

const NamesContainer = connect(mapStateToProps)(Names);


export default NamesContainer;