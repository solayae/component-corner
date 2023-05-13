import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail, getUserById } from '../../redux/actions';
import { Link, useParams } from 'react-router-dom';
import useLocalStorage from '../../components/useLocalStorage';
import { Heart } from 'iconoir-react';
import axios from 'axios';

import styles from './Detail.module.css';
import Rating from '@mui/material/Rating';
import PropTypes, { element } from 'prop-types';
import { Alert } from '@mui/material';

function Detail({ cart, setCart }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.detail);
  const detailUser = useSelector((state) => state.userInfo);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // alert("Entré")
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
      // alert("Salí")
    };
  }, [dispatch, id]);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    let product = {
      id: detailProduct.id,
      name: detailProduct.name,
      image: detailProduct.image,
      price: detailProduct.price,
      stock: detailProduct.stock,
      quantity: quantity,
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
    if (duplicated === true) newArray;
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

  // FAVORITOS

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);

  const handleFavoriteClick = async () => {
    if (!user) {
      console.log('Logueate');
    } else {
      console.log('Logueado. El ID del user logueado es ' + userId);
      // setIsFavorite(!isFavorite);
      if (!isFavorite === true) {
        console.log('true perro');
        const newFavorite = {
          email: detailUser.email,
          favorite: [...detailUser.favorite, detailProduct.id],
        };
        try {
          const respuesta = await axios.put('/users/', newFavorite);
          console.log(respuesta);
        } catch (error) {
          console.log(error);
        }

      } else if (!isFavorite === false) {
        console.log('false gato');

        let elementoABuscar = detailProduct.id;
        let index = detailUser.favorite?.indexOf(elementoABuscar);
        if (index !== -1) {
          console.log('si está');
          const newFavorite = {
            email: detailUser.email,
            favorite: [
              ...detailUser.favorite.slice(0, index),
              ...detailUser.favorite.slice(index + 1),
            ],
          };
          try {
            const respuesta = await axios.put('/users/', newFavorite);
            console.log(respuesta);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log('no está');
        }
      }
      console.log('creado', detailUser.favorite);

    }
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
            <Link to='/cart' className={styles.addToCartBtn}>
              AGREGAR AL CARRITO
            </Link>
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

Detail.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Detail;
