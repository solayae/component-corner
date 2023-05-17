import styles from "./InfoProducts.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FormProduct from "./Form/FormProduct";

export default function InfoProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts([...response.data]);
      setFilterProducts([...response.data]);
    } catch (error) {
      console.log("error: en getProducts: ", error);
    }
  };
  const filterProducts = (value) => {
    if (!value) return setFilterProducts(products);
    let oldList = [...products];
    const newList = oldList.filter((o) => o.name.toLowerCase().includes(value));
    setFilterProducts(newList);
  };

  const deleteProduct = async (e) => {
    try {
      const response = await axios.put("/products", {
        ...e,
        banned: !e.banned,
      });
      response.status === 200 && getProducts();
    } catch (error) {
      console.log("error: en deleteProducts: ", error);
    }
  };

  useEffect(() => {
    !products.length && getProducts();
  }, [products, filteredProducts]);

  return (
    <div className={styles.container}>
      <div className={styles.container_products}>
        <input
        type="text"
        onChange={(ev) => {
          filterProducts(ev.target.value);
        }}
        placeholder="Buscar por producto"
        />
        <div className={styles.containerProducts}>
          <h2 className={styles.titulo}>Productos</h2>
          <div className={styles.row} style={{ backgroundColor: "#f9c139", width: "100%" }}>
            <p>Imagen</p>
            <p>Nombre del artículo</p>
            <p>Stock</p>
            <p>Bloquear</p>
          </div>
          <div className={styles.detalle_products}>
            {filteredProducts.map((e) => (
              <div className={styles.row} key={e.id}>
                <img
                  src={e.image}
                  style={{ "maxHeight": "60px", "maxWidth": "60px" }}
                  className="col text-right"
                />
                <div >{e.name}</div>
                <div >{e.stock}</div>
                <div >
                  <input
                    type="checkbox"
                    onChange={() => deleteProduct(e)}
                    checked={e.banned}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><FormProduct /></div>
    </div>
  );
}
