import styles from "./InfoProducts.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InfoProducts() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts([...response.data]);
      setFilterProducts([...response.data]);
    } catch (error) {
      console.log("error: en getProducts: ", error);
    }
  };
  const filterProduct = (value) => {
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
  }, [products, filterProducts]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(ev) => {
          filterProducts(ev.target.value);
        }}
        placeholder="Buscar por producto"
      />
      <h2>Productos</h2>
      <div className={styles.products}>
        <div className="row">
          <div className="col text-center">Imagen</div>
          <div className="col text-center">Descripcion</div>
          <div className="col text-center">Stock</div>
          <div className="col text-center">Bloquear</div>
        </div>
      </div>
      <div className={styles.detalle_products}>
        {filterProducts.map((e) => (
          <div className="row">
            <img
              src={e.image}
              width={20}
              height={50}
              className="col text-center"
            />
            <div className="col text-center">{e.name}</div>
            <div className="col text-center">{e.stock}</div>
            <div className="col text-center">
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
  );
}
