import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <nav className={style['nav-desktop']}>
      <ul className={style['nav-desktop__ul']}>
        <li className={style['nav-desktop__li']}>
          <a className={style['nav-desktop__a']} href="/">
            <b className={style['nav-desktop__b']}>W</b>ord 
            <b className={style['nav-desktop__b']}>M</b>iner 
            <b className={style['nav-desktop__b']}>E</b>nglish
          </a>
        </li>
        <li className={style['nav-desktop__li']}>
          <a className={style['nav-desktop__a']} href="/study">
            Aprender Nova Palavra
          </a>
        </li>
        <li className={style['nav-desktop__li']}>
          <a className={style['nav-desktop__a']} href="/word-list">
            Lista de Palavras
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header