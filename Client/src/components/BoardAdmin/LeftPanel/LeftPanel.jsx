import styles from "./LeftPanel.module.css";
import usuarios from '../../../assets/image/user.png';
import productos from '../../../assets/image/productos.jpeg';
import ventas from '../../../assets/image/ventas.png';

const LeftPanel = () => {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.menu}>
        <img className={styles.imagePanel} src={usuarios} alt="usuarios" />
        <p>Usuarios</p>
      </div>
      <div className={styles.menu}>
        <img className={styles.imagePanel} src={productos} alt="productos" />
        <p>Productos</p>
      </div>
      <div className={styles.menu}>
        <img className={styles.imagePanel} src={ventas} alt="ventas" />
        <p>Ventas</p>
      </div>
    </div>
  );
};
export default LeftPanel;
