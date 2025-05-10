import { HOME_PAGE, STUDY_PAGE, WORD_LIST } from '../../../routes/routeConstants';
import style from './Header.module.css';
import Logo from '../../UI/Logo/Logo';
import NavItem from './NavItem';

const Header = () => {
  return (
    <nav className={style['nav-desktop']}>
      <ul className={style['nav-desktop__ul']}>
        <li className={style['nav-desktop__li']}>
          <NavItem to={HOME_PAGE}>
            <Logo />
          </NavItem>
        </li>
        <li className={style['nav-desktop__li']}>
          <NavItem to={STUDY_PAGE}>Aprender Nova Palavra</NavItem>
        </li>
        <li className={style['nav-desktop__li']}>
          <NavItem to={WORD_LIST}>Minha Lista de Palavras</NavItem>
        </li>
      </ul>
    </nav>
  )
}

export default Header