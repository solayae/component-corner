import PropTypes from 'prop-types';
import Styles from './Card.module.css';

export default function Card(props) {
  const {product} = props;
  return (
    <div key={product.id} className={Styles.card__container}>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={Styles.card__text}>
        <h1>{product.name}</h1>
        <p>Marca: {product.brand}</p>
        <p>En Stock: {product.stock}</p>
        <h2>${product.price}</h2>
      </div>
    </div>
  );
}
Card.propTypes = {
  product: PropTypes.object,
};
