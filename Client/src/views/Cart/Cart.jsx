import styles from './Cart.module.css';
import axios from 'axios';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"

function Cart({ cart, setCart }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const totalPrice = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
  const navigate = useNavigate()

  const cartQuantity = cart.reduce((acc, el) => {
    return acc + el.quantity;
  }, 0);

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

  const handleRemove = (id) => {
    setCart((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  };

  const buyFunction = async () => {
    try {
      const response = await axios.post('/payment', cart);
      await setCart([])
      window.location.href = response.data.response.body.init_point;
    } catch (error) { console.log(error) }
  }

  return cart.length < 1 ? (
    <div className={styles.cartVacio}>
      <h2>Tu carrito está vacio</h2>
      <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
      <button
        onClick={() => navigate("/home")}
        className={styles.offersBtn}
      >
        Descubrir ofertas
      </button>
    </div>
  ) : (
    <div className={styles.cartContainer}>
      <div className={styles.cartProducts}>
        {cart?.map((product) => {
          return (
            <div className={styles.cartContent} key={product.id}>
              <img src={product.image}></img>

              <div className={styles.productName}>{product.name}</div>

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
                <button
                  className={styles.DelToCartBtn}
                  onClick={() => handleRemove(product.id)}
                >
                  Quitar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.cartTotal}>
        <div>
          <span className={styles.orderNumber}>
            NRO DE ORDEN: PONER ORDER NUMBER{' '}
          </span>

            <h2 className={styles.userName}>{user ? (user.name) : "Guest"}</h2>

            <p> Articulos: {cartQuantity}</p>
          <p>
            Envio: <span>Gratis!</span>
          </p>
        </div>

        <div className={styles.totalPrice}>
          <span>PRECIO TOTAL: ${totalPrice}</span>
        </div>

        <div>
          <button
            className={styles.cartPay}
            onClick={() =>
              buyFunction()
              // axios
              //   .post('/payment', cart)
              //   .then(
              //     (res) =>
              //       (window.location.href = res.data.response.body.init_point)
              //   )
            }
          >
            {' '}
            COMPRAR{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
Cart.propTypes = { cart: PropTypes.array, setCart: PropTypes.func }
export default Cart;
