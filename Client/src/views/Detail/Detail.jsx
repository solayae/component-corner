import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail } from '../../redux/actions';
import { Link, useParams } from 'react-router-dom';
import useLocalStorage from '../../components/useLocalStorage';
import { Heart } from 'iconoir-react';

import styles from './Detail.module.css';
import Rating from '@mui/material/Rating';

function Detail({ cart, setCart }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.detail);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // alert("Entré")
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
      // alert("Salí")
    };
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    let product = {
      id: detailProduct.id,
      stock: quantity,
    };

    const newArray = [];
    let duplicated = false;
    cart.forEach((e) => {
      if (e.id === product.id) {
        newArray.push(product);
        duplicated = true;
      } else {
        newArray.push(e);
      }
    });
    if (duplicated === true) setCart(newArray);
    else setCart([...cart, product]);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < detailProduct.stock) setQuantity(quantity + 1);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    console.log('Button clicked. Is favorite:', !isFavorite);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_image_details}>
        <div className={styles.container_image}>
          <img
            className={styles.image}
            src={detailProduct.image}
            alt={detailProduct.name}
          />
        </div>

        <div className={styles.info}>
          <p className={styles.extra_p}>ID: {detailProduct.id}</p>
          <div className={styles.name_container}>
            <p className={styles.title}>{detailProduct.name}</p>
            <button
              className={`${styles.button_fav} ${
                isFavorite ? styles.button_favorite : styles.button_nofavorite
              }`}
              onClick={handleFavoriteClick}
            >
              <Heart />
            </button>


          </div>

          <p className={styles.extra_p}>Sin puntuación</p>
          <p className={styles.price}>US ${detailProduct.price}</p>
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
          <p className={styles.extra_p}>
            Stock disponible: {detailProduct.stock}
          </p>
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
            {/* <Link to='/cart' className={styles.addToCartBtn}>AGREGAR AL CARRITO</Link> */}
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>

      <div className={styles.details}>
        <p>Caracteristicas:</p>
        {detailProduct.detail?.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </div>

      <h3 className={styles.rating_comments}>Comentarios</h3>
      <span className={styles.line}></span>
      <div className={styles.rating_container}>
        {/* <p>Cantidad de comentarios: 0</p> */}
        <div className={styles.rating_stars}>
          <p>Valoración de tu compra :</p>
          <Rating name='no-value' value={null} size='' />
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
