import styles from "./InfoVentas.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InfoVentas() {
  const [ventas, setVentas] = useState([]);
  const [filteredVentas, setFilterVentas] = useState([]);

  const getVentas = async () => {
    try {
      const response = await axios.get("/ventas");
      setVentas([...response.data]);
      setFilterVentas([...response.data]);
    } catch (error) {
      console.log("error: en getVentas: ", error);
    }
  };
  const filterVentas = (value) => {
    if (!value) return setFilterVentas(ventas);
    let oldList = [...ventas];
    const newList = oldList.filter((o) => o.name.toLowerCase().includes(value));
    setFilterVentas(newList);
  };

  /* const deleteProduct = async (e) => {
    try {
      const response = await axios.put("/products", {
        ...e,
        banned: !e.banned,
      });
      response.status === 200 && getProducts();
    } catch (error) {
      console.log("error: en deleteProducts: ", error);
    }
  }; */

  useEffect(() => {
    !ventas.length && getVentas();
  }, [ventas, filteredVentas]);
  return (
    <div>
      <div className={styles.container_products}>
        <input
          type="text"
          onChange={(ev) => {
            filterVentas(ev.target.value);
          }}
          placeholder="Buscar por Fecha"
        />
        <div className={styles.containerProducts}>
          <h2 className={styles.titulo}>Ventas</h2>
          <div
            className={styles.row}
            style={{ backgroundColor: "#f9c139", width: "100%" }}
          >
            <p>Fecha</p>
            <p>Cliente</p>
            <p>Nro Recibo</p>
            <p>id_usuario</p>
          </div>
          <div className={styles.detalle_products}>
            {filteredVentas.map((e) => (
              <div>
                <div>{e.fecha}</div>
                <div>{e.Cliente}</div>
                <div>{e.nroPedido}</div>
                <div>{e.id_usuario}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
