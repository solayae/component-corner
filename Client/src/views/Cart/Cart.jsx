import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import axios from "axios";

function Cart({ cart, setCart }) {

  const totalPrice = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);

  const showProductName = cart.map((el) => {
    return (
      <div key={el.id}>
        <div >Nombre: {el.name}</div>

        <div >Stock: {el.stock}</div>
      </div>
    )
  })

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

  return (

    cart.length < 1 ?
      <div className={styles.cartVacio}>
        <h2>Tu carrito está vacio</h2>
        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
        <Link to="/home"><button className={styles.addToCartBtn}>Descubrir ofertas</button></Link>
      </div> :

      <div className={styles.cartContainer}>

        <div className={styles.cartProducts}>
          {
            cart?.map((product) => {
              return (
                <div className={styles.cartContent} key={product.id}>
                  <img src={product.image}></img>

                  <div className={styles.productName}>Nombre: {product.name}</div>

                  <div className={styles.productStock}>Stock: {product.stock}</div>

                  <div className={styles.productPrice}>${product.price}</div>

                  <div className={styles.cartCounter}>
                    <button
                      className={styles.cartButton}
                      onClick={() => handleDecrement(product.id)}
                    >
                      -
                    </button>
                    <div className={styles.productQuantity}>{product.quantity}</div>
                    <button
                      className={styles.cartButton}
                      onClick={() => handleIncrement(product.id)}
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <button className={styles.cartPay}
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
              )
            })
          }

        </div>


        <div className={styles.cartTotal}>
          <div>
            Articulos: {cart.map((el) => {
              return (
                <div key={el.id}>
                  <div >{el.name.length > 35 ? el.name.slice(0, 35) + '...' : el.name}</div>

                  <div >Cantidad: {el.quantity}</div>
                </div>
              )
            })
            }
          </div>

          <div className={styles.totalPrice}>
            PRECIO TOTAL: ${totalPrice}</div>
        </div>


      </div>
  );
}

export default Cart;
