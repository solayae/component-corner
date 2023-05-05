import React, { useState } from 'react';
import useLocalStorage from '../../components/useLocalStorage';
import styles from './Cart.module.css';

function Cart({ cart, setCart }) {

    const [quantity, setQuantity] = useState(0);

    const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncrement = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
      };

    return (
        cart.map((product) => {
            return <div className={styles.cartContent} key={product.id}>

                <img src={product.image}></img>

                <div className={styles.productName}>
                    Nombre: {product.name}
                </div>

                <div className={styles.productStock}>
                    Stock: {product.stock}
                </div>

                <div className={styles.productPrice}>
                    ${product.price}
                </div>

                <div className={styles.cartCounter}>
                    <button className={styles.cartButton} onClick={handleIncrement}>+</button>
                    <div className={styles.productQuantity}>
                        {product.quantity}
                    </div>
                    <button className={styles.cartButton} onClick={handleDecrement}>-</button>
                </div>

            </div >
        })
    )
}

export default Cart