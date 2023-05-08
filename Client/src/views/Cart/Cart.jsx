import styles from "./Cart.module.css";
import axios from "axios";

function Cart({ cart, setCart }) {
  const handleIncrement = (id) => {
    setCart((product) => {
      return product.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              item.quantity === item.stock ? item.quantity : item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    });
  };

  const handleDecrement = (id) => {
    setCart((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return cart?.map((product) => {
    return (
      <div className={styles.cartContent} key={product.id}>
        <img src={product.image}></img>

        <div className={styles.productName}>Nombre: {product.name}</div>

        <div className={styles.productStock}>Stock: {product.stock}</div>

        <div className={styles.productPrice}>${product.price}</div>

        <div className={styles.cartCounter}>
          <button
            className={styles.cartButton}
            onClick={() => handleIncrement(product.id)}
          >
            +
          </button>
          <div className={styles.productQuantity}>{product.quantity}</div>
          <button
            className={styles.cartButton}
            onClick={() => handleDecrement(product.id)}
          >
            -
          </button>
        </div>

        <div>
          <button
            onClick={() =>
              axios
                .post("/payment", product)
                .then(
                  (res) =>
                    (window.location.href = res.data.response.body.init_point)
                )
            }
          >
            Comprar
          </button>
        </div>
      </div>
    );
  });
}

export default Cart;
