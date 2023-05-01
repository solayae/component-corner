import Cards from '../../components/Cards/Cards';
import Style from './LandingPage.module.css';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function LandingPage() {
  const [recommendedProducts, setRecommended] = useState([]);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    setRecommended([...products.slice(0, 5)]);
  }, [products]);

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
}

export default LandingPage;
