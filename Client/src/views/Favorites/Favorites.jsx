import React from 'react';
import styles from './Favorites.module.css';

export default function Favorites() {
  return (
    <>
      <h1 className={styles.favorites_title}>Favoritos</h1>
      <div className={styles.favorites_container}>
        <section>
          <figure>
            <img
              src='https://www.muycomputerpro.com/wp-content/uploads/2017/04/IntelXeon.jpg'
              alt='imagen'
              width='300px'
            />
          </figure>
          <div className= {styles.favorites_info}>
            <p>ID: 123456789</p>
            <h3>Procesador Intel Xeon E3-1240v2</h3>
            <h3>$ 120</h3>

            <h4>Stock: 4</h4>
            <button>Eliminar</button>
          </div>
        </section>
      </div>
    </>
  );
}
