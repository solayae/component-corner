import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>SOPORTE</h3>
          <ul>
            <li>
              <a href='#'>Preguntas frecuentes</a>
            </li>
            <li>
              <a href='#'>Política de cambios</a>
            </li>
            <li>
              <a href='#'>Política de devoluciones</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>SERVICIOS</h3>
          <ul>
            <li>Envío gratis</li>
            <li>Pago a través de Mercado Pago</li>
            <li>
              <a href='#'>Verificación de Estado de Pedido</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>CONTACTO</h3>
          <ul>
            <li>
              <a href='#'>+54 123 456 789</a>
            </li>
            <li>
              <a href='#'>contacto@componentcorner.com</a>
            </li>
            <li>Argentina | Colombia | Perú</li>
          </ul>
        </div>
      </footer>
      <div className={styles.bottomBar}>
        <h3>© TODOS LOS DERECHOS RESERVADOS | COMPONENTCORNER.COM</h3>
      </div>
    </>
  );
};

export default Footer;
