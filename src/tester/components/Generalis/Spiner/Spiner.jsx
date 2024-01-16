import loadSpiner from '../../../../inspect/image/spinner-200.webp';
import spinerStyle from './Spiner.module.css';


const Spiner = function () {

    return (
        <>
            <div className={spinerStyle.spiner_container}>
                <div className={spinerStyle.spiner_image}>
                    <img className={spinerStyle.spiner} src={loadSpiner} />
                </div>

            </div>

        </>
    );
}


export default Spiner;