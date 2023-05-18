import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Favorites.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Favorites({setFavoriteChanges, favoriteChanges}) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [favoritesID, setFavoritesID] = useState([]);
  const [mounted, setMounted] = useState(false);
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  const detailUser = async () => {
    try {
      const response = await axios.get(`/users/${userId}`);
      const userFavorites = response.data.favorite;
      setFavoritesID(userFavorites);
      if (allProducts.length) {
        const favoriteProducts = allProducts.filter((product) =>
          userFavorites.includes(product.id)
        );
        setFavoriteProducts([...favoriteProducts]);
        setMounted(true);
      } else setMounted(!mounted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    detailUser();
    //eslint-disable-next-line
  }, [mounted]);

  // const userFavorites = detailUser.favorite;
  // const favoriteProducts = allProducts.filter((product) =>
  //   userFavorites.includes(String(product.id))
  // );
  // console.log(favoriteProducts);

  const handleClick = async (id) => {
    console.log(String(id));
    const response = await axios.get(`/users/${userId}`);
    const backupUser = response.data;
    const newFavorites = backupUser.favorite?.filter((e) => e != String(id));
    console.log(newFavorites);
    const newUser = { ...backupUser, favorite: newFavorites };
    const responseEdit = await axios.put('/users/', newUser);
    console.log(responseEdit.data);
    setFavoriteChanges(!favoriteChanges)
    setMounted(!mounted);    
  };

  return favoriteProducts.length < 1 ? (
    <div className={styles.favoritesVacio}>
      <h1 className={styles.favoritesTitle}>No hay favoritos</h1>
      <button
        onClick={() => navigate("/home")}
        className={styles.addFav}
      >
        Agregar productos!
      </button>
    </div>
  ) :
    (
      <>
        <h1 className={styles.favoritesTitle}>Favoritos</h1>
        <div className={styles.favoritesContainer}>
          {favoriteProducts.map((product) => (
            <div className={styles.favoritesContent} key={product.id}>
              <Link to={`/products/${product.id}`}>

                <img src={product.image} alt='imagen' width='300px' />

              </Link>

              <div className={styles.productName}>{product.name}</div>

              <div className={styles.productId}>ID: {product.id}</div>

              <div className={styles.productPrice}>${product.price}</div>

              <div className={styles.productStock}>Stock: {product.stock}</div>

              <button className={styles.DeleteFav} onClick={() => handleClick(product.id)}>Eliminar</button>
            </div>))}
        </div>
      </>
    )
}
