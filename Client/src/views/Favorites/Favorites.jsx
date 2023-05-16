import { useEffect, useState } from 'react';
import styles from './Favorites.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [mounted, setMounted] = useState(false)
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  const detailUser = async () => {
    try {
      const response = await axios.get(`/users/${userId}`);
      const userFavorites = response.data.favorite;
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
    <div className={styles.container}>
      <h1 className={styles.favorites_title}>Tus favoritos:</h1>
      <div className={styles.favorites_container}>
      {favoriteProducts.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} >
          <div className={styles.favorite}>
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
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}
