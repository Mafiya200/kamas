import styleNames from './Names.module.css';
import Name from './Name/Name';








const Names = function (props) {


    let newNamesArray = props.namesArray.map(function (item, index, array) {

        return (
            <Name key={item.name} name={item.name} id={item.id} />
        )


    });


    return (
        <div className={styleNames.names}>
            <div className={styleNames.names__body}>
                <ul className={styleNames.names__list}>

                    {newNamesArray}
                </ul>
            </div>
        </div>
    );
}


export default Names;