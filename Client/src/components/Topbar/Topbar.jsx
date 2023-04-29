import styles from './Topbar.module.css';
import favorite from './assets/favorite-icon.png';
import cart from './assets/cart-icon.png';
import login from './assets/login-icon.png';
import search from './assets/search-icon.png';
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {

  const [triggerPopUp, setTriggerPopUp] = useState(false);

  return (
    <nav className={styles.topbar}>
      <div className={styles.row2}>
        <div className={styles.logo}>
          COMPONENT CORNER
        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Buscar productos' />
          <img src={search} alt="search-icon" />
        </div>
        <div className={styles.icons}>
          <div className={styles.favorite}>
            {' '}
            <img src={favorite} alt='favorite-icon' />
          </div>
          <div className={styles.cart}>
            <img src={cart} alt='cart-icon' />
          </div>
          <div className={styles.login}>
            <PopUp trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
            <img src={login} onClick={() => setTriggerPopUp(true)} alt='login-icon' />
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <Link to={"/"}>
        <a href='#' className={styles.about}>
          HOME
        </a>
        </Link>
        <div className={styles.categories}>
          <div className={styles.dropdown}>
            <a className={styles.about}>CATEGORIAS</a>
            <div className={styles.dropdownContent}>
              <div className={styles.column}>
                <a href='#'>Equipos armados </a>
                <a href='#'>Notebooks </a>
                <a href='#'>Fuentes y UPS </a>
                <a href='#'>Procesadores </a>
                <a href='#'>Memorias </a>
                <a href='#'>Tarjetas de video </a>
                <a href='#'>Monitores y TV </a>
                <a href='#'>Pedrives </a>
              </div>
              <div className={styles.column}>
                <a href='#'>Consolas </a>
                <a href='#'>Gabinetes</a>
                <a href='#'>Motherboards</a>
                <a href='#'>Cooling</a>
                <a href='#'>Almacenamiento</a>
                <a href='#'>Perifericos</a>
                <a href='#'>Sillas</a>
                <a href='#'>Impresoras</a>
              </div>
            </div>
          </div>
        </div>
        <a href='#' className={styles.about}>
          SOBRE COMPONENT CORNER
        </a>
        <a href='#' className={styles.about}>
          VER ESTADO DE PEDIDO
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
