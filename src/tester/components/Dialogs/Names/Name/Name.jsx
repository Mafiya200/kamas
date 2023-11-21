import { NavLink } from 'react-router-dom';
import styleName from './Name.module.css';








const Name = function (props) {

    return (
        <li className={styleName.link}>
            <NavLink className={({ isActive }) => (isActive ? styleName.active : '') + ' ' + styleName.name} to={props.name}>{props.name}</NavLink>
        </li>
    );
}


export default Name;