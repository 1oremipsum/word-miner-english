import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style['logo-container']}>
        <b className={style['logo-container__b']}>W</b>ord
        <b className={style['logo-container__b']}>M</b>iner
        <b className={style['logo-container__b']}>E</b>nglish
    </div>
  )
}

export default Logo