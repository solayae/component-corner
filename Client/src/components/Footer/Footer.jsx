import styles from './Footer.module.css';
import { BsTelephone } from "react-icons/bs";
import { BsTools } from "react-icons/bs"
import { FaHandshake } from "react-icons/fa"
import { MdOutlineContactSupport } from "react-icons/md"
import { RiCustomerService2Fill } from "react-icons/ri"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>SOPORTE</h3>
          <Link to="#"><h2><RiCustomerService2Fill/> </h2></Link>
          <ul>
            <li>
              <a href="#">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="#">Política de cambios</a>
            </li>
            <li>
              <a href="#">Política de devoluciones</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>SERVICIOS</h3>
          <Link to="#"><h2><BsTools/></h2></Link>
          <ul>
            <li>Envío gratis</li>
            <li>Pago a través de Mercado Pago</li>
            <li>
              <a href="#">Verificación de Estado de Pedido</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>CONTACTO</h3>
          <Link to="#"><h2><BsTelephone/></h2></Link>
          <ul>
            <li>
              <a href="#">+54 123 456 789</a>
            </li>
            <li>
              <a href="#">contacto@componentcorner.com</a>
            </li>
            <li>Argentina | Colombia | Perú</li>
          </ul>
          {/* <a href="https://www.flaticon.es/iconos-gratis/filtrar" title="filtrar iconos">Filtrar iconos creados por joalfa - Flaticon</a> */}
        </div>
      </footer>
      <div className={styles.bottomBar}>
        <h3>© TODOS LOS DERECHOS RESERVADOS | COMPONENTCORNER.COM</h3>
      </div>
    </div>
  );
};

export default Footer;
