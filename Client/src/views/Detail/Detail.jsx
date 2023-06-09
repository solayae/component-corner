import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { Heart } from 'iconoir-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Detail.module.css';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Detail({ cart, setCart, setFavoriteChanges, favoriteChanges }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.detail);
  // const detailUser = useSelector((state) => state.userInfo);
  const [isFavorite, setIsFavorite] = useState(false);
  const [starsValue, setStarsValue] = useState(0);
  const [reviewValue, setReviewValue] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  // console.log(user);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`/users/${userId}`);
      const userDataFavorite = response.data.favorite;
      for (let i = 0; i < userDataFavorite.length; i++) {
        if (userDataFavorite[i] === id) setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // dispatch(getUserById(userId));
    getUserDetails();
    //eslint-disable-next-line
  }, [isFavorite]);

  // **** FAVORITOS ****

  const handleAddToFavorites = async () => {
    try {
      if (!user) return toast.info(`Inicia sesión para agregar a favoritos!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      const response = await axios.get(`/users/${userId}`);
      const backupUser = response.data;
      console.log(backupUser);
      
      if (isFavorite) {
        const newFavorites = backupUser.favorite?.filter((e) => e != id);
        const newUser = { ...backupUser, favorite: newFavorites };
        const responseEdit = await axios.put('/users/', newUser);
        console.log(responseEdit);
        toast.info(`Se quito ${detailProduct.name} de favoritos!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setFavoriteChanges(!favoriteChanges)
        return setIsFavorite(false);
      }

      const newFavorites = [...backupUser.favorite, id];
      const newUser = { ...backupUser, favorite: newFavorites };
      const responseEdit = await axios.put('/users/', newUser);
      console.log(responseEdit);
      toast.success(`Se agregó ${detailProduct.name} a favoritos`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setFavoriteChanges(!favoriteChanges)
      return setIsFavorite(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  // CARRITO

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

  // COMENTARIOS/REVIEWS

  const handleAddReview = async () => {
    try {
      if (!user) return toast.info(`Inicia sesión para dejar una reseña`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      const review = {
        user: user.name,
        stars: starsValue,
        comment: reviewValue,
      };
      console.log(review);
      if (!review.stars || !review.comment)
        return toast.info(`Faltan completar campos.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

      const response = await axios.get(`/products/${id}`);
      const bkProduct = response.data;
      console.log(bkProduct);

      const newReview = [...bkProduct.reviews, review];
      // const productUpdate = {...bkProduct, reviews: newReview };
      const responseEdit = await axios.put('/products/', {
        id: id,
        reviews: newReview,
      });
      setReviewValue('');
      setStarsValue(0);
      console.log(responseEdit);
      toast.success(`Genial! se agrego tu reseña!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      dispatch(getDetail(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setReviewValue(event.target.value);
  };

  function starAverage() {
    const suma = detailProduct.reviews?.reduce(
      (total, objeto) => total + objeto.stars,
      0
    );
    const promedio = suma / detailProduct.reviews?.length;
    return Number(promedio.toFixed(1));
  }

  const productRating = starAverage();

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
              onClick={handleAddToFavorites}
            >
              <Heart />
            </button>
            <ToastContainer />
            
          </div>

          {detailProduct.reviews?.length ? (
            <Rating
              name='half-rating-read'
              defaultValue={productRating}
              precision={0.5}
              readOnly
            />
          ) : (
            <p className={styles.extra_p}>Sin puntuación</p>
          )}

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
            <Link to='/cart'>
          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              AGREGAR AL CARRITO
          </button>
            </Link>
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
        <p
          className={styles.notReviews}
        >{`Cantidad de comentarios: ${detailProduct.reviews?.length}`}</p>
        <span className={styles.lineReviews}></span>

        {detailProduct.reviews?.length ? (
          detailProduct.reviews.map((e) => (
            <div key={e.id} className={styles.userReview}>
              {/* <p>{e.user}</p> */}
              <Rating name='read-only' value={e.stars} readOnly />
              <p>{e.comment}</p>
              <span className={styles.lineReviews}></span>
            </div>
          ))
        ) : (
          <div className={styles.notReviewsContainer}>
            <p>No hay comentarios aún</p>
            <span className={styles.lineReviews}></span>
          </div>
        )}

        <div className={styles.rating_stars}>
          <p>Valoración de tu compra :</p>
          <Rating
            name='simple-controlled'
            value={starsValue}
            onChange={(event, newValue) => {
              setStarsValue(newValue);
              console.log(newValue);
            }}
          />
        </div>
        <div className={styles.commentInput}>
          <textarea
            id='comment'
            name='comment'
            placeholder='Escribe aquí tu comentario'
            value={reviewValue}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className={styles.container_button}>
          <button className={styles.rating_button} onClick={handleAddReview}>
            AGREGAR COMENTARIO
          </button>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  setFavoriteChanges: PropTypes.func,
  favoriteChanges: PropTypes.bool
};

export default Detail;
