import { Link } from 'react-router-dom';
import style from './Header.module.css';

const NavItem = ({ to, children }) => {
    return (
        <Link to={to} className={style['nav-desktop__a']}>
            { children }
        </Link>
    )
}

export default NavItem