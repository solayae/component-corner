import PropTypes from 'prop-types';
import Card from './Card';
import Styles from './Cards.module.css';
export default function Cards(props) {
  const products = props.products;

  return (
    <div className={Styles.cards__container}>
      {products.map((e) => (
        <Card product={e} key={e.id} />
      ))}
    </div>
  );
}
Cards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};
