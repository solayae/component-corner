import React, { useState } from 'react';
import styles from './Detail.module.css';
import Rating from '@mui/material/Rating';

function Detail(props) {
  // const { id, image, price } = props.product;
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToCart = () => {
    // lógica para agregar al carrito
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_image_details}>
        <div className={styles.container_image}>
          <img
            className={styles.image}
            src='https://http2.mlstatic.com/D_NQ_NP_902606-MLA43542876076_092020-O.jpg'
            alt='IMG'
          />
        </div>

        <div className={styles.info}>
          <p className={styles.extra_p}>ID producto: 123</p>
          <p className={styles.title}>Motherboard + Gigabyte B450M DS3H</p>
          <p className={styles.extra_p}>Sin puntuación</p>
          <p className={styles.price}>US $73</p>
          <div className={styles.quantity}>
            <button onClick={handleDecrement} className={styles.bottone5}>
              {' '}
              -{' '}
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} className={styles.bottone5}>
              {' '}
              +{' '}
            </button>
          </div>
          <p className={styles.extra_p}>Stock disponible: 200</p>
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>

      <div className={styles.details}>
        <p>Caracteristicas:</p>
        <ul>
          <li>AMD Ryzen AM4 socket</li>
          <li>Dual Channel DDR4, 4 DIMMs</li>
          <li>PCIe Gen3 M.2 NVMe with thermal guard</li>
          <li>PCIe Gen3 M.2 NVMe with thermal guard</li>

          <li>RGB Fusion supports RGB LED strips in 7 colors</li>
          <li>Smart Fan 5 with Fan Stop for silent cooling</li>
        </ul>
      </div>

      <h3 className={styles.rating_comments}>Comentarios</h3>
      <span className={styles.line}></span>
      <div className={styles.rating_container}>
        {/* <p>Cantidad de comentarios: 0</p> */}
        <div className={styles.rating_stars}>
          <p>Valoración de tu compra :</p>
          <Rating
            name='no-value'
            value={null}
            size='large'
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <div className={styles.commentInput}>
          <textarea
            id='comment'
            name='comment'
            placeholder='Escribe aquí tu comentario'
          ></textarea>
        </div>
        <div className={styles.container_button}> 
        <button className={styles.rating_button}>AGREGAR COMENTARIO</button>

        </div>
      </div>
    </div>
  );
}

export default Detail;
