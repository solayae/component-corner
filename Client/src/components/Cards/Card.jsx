import PropTypes from 'prop-types';
import Styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { product } = props;
  const deshabilitado =  product.stock === 0 || product.delete === true
  return (
    //   className={Styles.card__container }
    <div key={product.id} className={`${Styles.card__container} ${deshabilitado ? Styles.disabled : ''}`} >
      <Link to={`/products/${product.id}`} className={Styles.card_link}>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={Styles.card__text}>
          <h1>{product.name}</h1>
          <p>Marca: {product.brand}</p>
          <p>En Stock: {product.stock}</p>
          <h2>${product.price}</h2>
        </div>
      </Link>
    </div>
  );
}
Card.propTypes = {
  product: PropTypes.object,
};
