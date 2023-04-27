import PropTypes from 'prop-types';

export default function Cards(props) {
  const products = props.products;

  return (
    <div>
      {products.map((e) => (
        <div key={e.id}>
          <img src={e.image} alt={e.name} />
          <h1>{e.name}</h1>
          <p>Marca: {e.brand}</p>
          <p>En Stock: {e.stock}</p>
          <h2>${e.price}</h2>
        </div>
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
