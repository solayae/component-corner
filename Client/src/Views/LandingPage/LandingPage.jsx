import {useSelector, useDispatch} from 'react-redux';
import TopBar from '../../Components/TopBar/TopBar';
import {getAllProducts} from '../../redux/actions';
import Cards from '../../components/Cards/Cards';
import Style from './LandingPage.module.css';
import {useEffect} from 'react';

const LandingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    if (products.length === 0) dispatch(getAllProducts());
    //eslint-disable-next-line
  }, [dispatch]);
  return (
    <div className={Style.landingPage}>
      <TopBar />
      <div className={Style.banner}>
        <div className={Style.banner__TextContainer}>
          <h1>¡Bienvenido a Component Corner!</h1>
          <p>Todo tipo de componentes y periféricos de calidad a su disposición.</p>
        </div>
      </div>
      <div className={Style.menuContanier}>
        <div className={Style.menuTrigger}>
          <h1>Categorias</h1>
          <div className={Style.dropdownMenu}>
            <ul>
              <li>
                <p>🎧</p>
                <p>Periféricos</p>
              </li>
              <li>
                <p>💻</p>
                <p>Componentes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.recommendations}>
        <h1>Recomendaciones:</h1>
        <Cards />
      </div>
    </div>
  );
};
export default LandingPage;
