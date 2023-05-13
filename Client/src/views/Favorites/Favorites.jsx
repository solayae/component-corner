import { useEffect, useState } from 'react';

import styles from './Favorites.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail, getUserById } from '../../redux/actions';
import axios from 'axios';

export default function Favorites({ favorites, setFavorites }) {
  const detailProduct = useSelector((state) => state.detail);
  const detailUser = useSelector((state) => state.userInfo);
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  useEffect(() => {
    dispatch(getUserById(userId));
  }, []);

  const userFavorites = detailUser.favorite;
  const favoriteProducts = allProducts.filter((product) =>
    userFavorites.includes(String(product.id))
  );
  console.log(favoriteProducts);

  return (
    <>
      <h1 className={styles.favorites_title}>Favoritos</h1>
      {favoriteProducts.map((product) => (
        <section key={product.id}>
          <figure>
            <img src={product.image} alt='imagen' width='300px' />
          </figure>
          <div className={styles.favorites_info}>
            <p>ID: {product.id}</p>
            <h3>{product.name}</h3>
            <h3>${product.price}</h3>
            <h4>Stock: {product.stock}</h4>
            <button>Eliminar</button>
          </div>
        </section>
      ))}
    </>
  );
}
