import React from 'react';
import styles from './Topbar.module.css';
// import Icon from '@material-ui/core/Icon';

const Topbar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.row2}>
        <div className={styles.logo}>
          {/* <img src='logo.png' alt='Logo' /> */}
          {/* <Icon>devices</Icon> */}

        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Buscar productos' />
          {/* <Icon>search</Icon> */}
        </div>
        <div className={styles.icons}>
          <div className={styles.favorite}>
            {/* <Icon>favorite</Icon> */}
          </div>
          <div className={styles.cart}>
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
            {/* <Icon>shopping_bag</Icon> */}
          </div>
          <div className={styles.login}>
            {/* <Icon>login</Icon> */}
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        {/* <a href='#' className={styles.about}>
          HOME
        </a> */}
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
