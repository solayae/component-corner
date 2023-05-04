import Cards from '../../components/Cards/Cards';
import Style from './LandingPage.module.css';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

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
        <h1 className={Style.recommendationsTitle}>Recomendaciones:</h1>
        <Cards products={recommendedProducts} />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px'}}>
          <h2>¡Publica tus productos con nosotros!</h2>
          <Link to={'/publicar'}>
            <button >HAZ CLICK AQUI</button>
          </Link>
          <p>Comisiones del 11% por cada venta</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
