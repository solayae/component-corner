import {getAllProducts} from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import Style from './LandingPage.module.css';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: function () {
      return dispatch(getAllProducts());
    },
  };
}

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(function LandingPage(props) {
  const [recommendedProducts, setRecommended] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const productsToState = async () => {
      try {
        if (!props.products.length) await props.getAllProducts();
        setMounted(true);
      } catch (error) {
        console.log(error);
      }
    };
    productsToState();
    setRecommended([...props.products.slice(0, 5)]);
    //eslint-disable-next-line
  }, [mounted]);
  return (
    <div className={Style.landingPage}>
      <div className={Style.banner}>
        <div className={Style.banner__TextContainer}>
          <h1>¡Bienvenido a Component Corner!</h1>
          <p>Todo tipo de componentes y periféricos de calidad a su disposición.</p>
        </div>
      </div>
      <div className={Style.menuContanier}></div>
      <div className={Style.recommendations}>
        <h1>Recomendaciones:</h1>
        <Cards products={recommendedProducts} />
      </div>
    </div>
  );
});

export default LandingPage;
