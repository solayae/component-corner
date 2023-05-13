import { useEffect, useState } from 'react';

import styles from './Favorites.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanDetail, getUserById } from '../../redux/actions';
import axios from 'axios';

export default function Favorites() {
  const detailProduct = useSelector((state) => state.detail);
  // const detailUser = useSelector((state) => state.userInfo);
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [favoritesID, setFavoritesID] = useState([])
  const [mounted, setMounted] = useState(false)
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;



  const detailUser = async () => {
    try {
      const response = await axios.get(`/users/${userId}`);
      const userFavorites = response.data.favorite;
      setFavoritesID(userFavorites)
      if (allProducts.length){
        const favoriteProducts = allProducts.filter((product) => userFavorites.includes(product.id))
        setFavoriteProducts([...favoriteProducts])
        setMounted(true)
      } else setMounted(!mounted)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    detailUser()
  //eslint-disable-next-line
  }, [mounted]);

  // const userFavorites = detailUser.favorite;
  // const favoriteProducts = allProducts.filter((product) =>
  //   userFavorites.includes(String(product.id))
  // );
  // console.log(favoriteProducts);

  const handleClick = async (id) => {
    console.log(String(id))
    const response = await axios.get(`/users/${userId}`);
    const backupUser = response.data;
    const newFavorites = backupUser.favorite?.filter((e) => e != String(id))
    console.log(newFavorites)
    const newUser = {...backupUser, favorite: newFavorites};
    const responseEdit = await axios.put("/users/", newUser)
    console.log(responseEdit.data)
    setMounted(!mounted)
  };

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
            <button onClick={()=>handleClick(product.id)}>Eliminar</button>
          </div>
        </section>
      ))}
    </>
  );
}
