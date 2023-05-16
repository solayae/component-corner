import styles from "./LeftPanel.module.css"

const LeftPanel = () => {
  return (
    <div className={styles.panelContainer}>
      <button>
        Usuarios
      </button>
      <button>
        Productos
      </button>
      <button>
        Ventas
      </button>
    </div>
  )
}
export default LeftPanel