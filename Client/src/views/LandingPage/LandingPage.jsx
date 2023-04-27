import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import Topbar from '../../components/Topbar/Topbar';
import Style from './LandingPage.module.css';
import { useEffect } from 'react';

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products[0]);
  useEffect(() => {
    if (products.length === 0) dispatch(getAllProducts());
    //eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className={Style.landingPage}>
      <Topbar />
      <div className={Style.banner}>
        <div className={Style.banner__TextContainer}>
          <h1>¡Bienvenido a Component Corner!</h1>
          <p>
            Todo tipo de componentes y periféricos de calidad a su disposición.
          </p>
        </div>
      </div>
      <div className={Style.menuContanier}></div>
      <div className={Style.recommendations}>
        <h1>Recomendaciones:</h1>
        <Cards products={products}/>
      </div>
    </div>
  );
};
export default LandingPage;
