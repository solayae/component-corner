import styles from "./LeftPanel.module.css"
import PropTypes from "prop-types"

const LeftPanel = ({ setType }) => {
  return (
    <div className={styles.panelContainer}>
      <button onClick={() => { setType("user") }}>
        Usuarios
      </button>
      <button onClick={() => { setType("products") }}>
        Productos
      </button>
      <button onClick={() => { setType("sells") }}>
        Ventas
      </button>
    </div>
  )
}
LeftPanel.propTypes = {
  setType: PropTypes.func
}
export default LeftPanel