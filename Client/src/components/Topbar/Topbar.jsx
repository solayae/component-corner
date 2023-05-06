import styles from './Topbar.module.css';
import favorite from './assets/favorite-icon.png';
import cart from './assets/cart-icon.png';
import login from './assets/login-icon.png';
import LoginTwo from '../loginTwo/loginTwo'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineForm } from "react-icons/ai";
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { clearMessage } from '../../redux/actions';


const Topbar = ({setFilters, setPage}) => {
  const [triggerPopUpL, setTriggerPopUpL] = useState(false);
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  const [triggerPopUpSignUp, setTriggerPopUpSignUp] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const dispatch = useDispatch()
  let categories = allProducts.map((e) => e.category);
  categories = [...new Set(categories)];

const effSignUp = ()=>{
  dispatch(clearMessage())
  setTriggerPopUpL(true)
}



  useEffect(()=>{
      console.log('render')
  }, [])



  // Obtén la longitud del array original
  let length = categories.length;
  const handleClick = (e) => {
    setFilters([e]);
    setPage(0);
    navigate('/home');
  };

  // Divide el array en dos partes iguales
  let firstColumn = categories.slice(0, length / 2);
  let secondColumn = categories.slice(length / 2);

  return (
    <nav className={styles.topbar}>
      <div className={styles.row2}>
        <Link to={'/'}>
          <div className={styles.logo}>COMPONENT CORNER</div>
        </Link>
        <div className={styles.searchContainer}>
          <SearchBar setResults={setResults} input={input} setInput={setInput} />
          <SearchResults results={results} setResults={setResults} setInput={setInput} input={input} />
        </div>
        <div className={styles.icons}>
          <div className={styles.favorite}>
            {' '}
            <img src={favorite} alt="favorite-icon" />
          </div>
          <div className={styles.cart}>
            <img src={cart} alt="cart-icon" />
          </div>
          {/* <div className={styles.login}>
            <Login trigger={triggerPopUp} setTrigger={setTriggerPopUp} />
            <img src={login} onClick={() => setTriggerPopUp(true)} alt='login-icon' />
          </div>
          
          <div className={styles.login}>
            <SignUp trigger={triggerPopUpSignUp} setTrigger={setTriggerPopUpSignUp} />
            <AiOutlineForm  style={{fontSize:'1.3em'}} onClick={() => setTriggerPopUpSignUp(true)} />
            
          </div> */}

          <div className={styles.login}>
            <LoginTwo trigger={triggerPopUpL} setTrigger={setTriggerPopUpL} />
            <AiOutlineForm  style={{fontSize:'1.3em'}} onClick={effSignUp} />
          </div>
          
        </div>
      </div>
      <div className={styles.row2}>
        <Link to={'/home'} className={styles.about}>
          HOME
        </Link>
        <div className={styles.categories}>
          <div className={styles.dropdown}>
            <a className={styles.about}>CATEGORIAS</a>
            <div className={styles.dropdownContent}>
              <div className={styles.column}>
                {firstColumn.map((e) => (
                  <button
                    onClick={() => {
                      handleClick(e);
                    }}
                    href="#"
                    key={e}>
                    {e}
                  </button>
                ))}
              </div>
              <div className={styles.column}>
                {secondColumn.map((e) => (
                  <button
                    onClick={() => {
                      handleClick(e);
                    }}
                    href="#"
                    key={e}>
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href="#" className={styles.about}>
          SOBRE COMPONENT CORNER
        </a>
        <a href="#" className={styles.about}>
          VER ESTADO DE PEDIDO
        </a>
      </div>
    </nav>
  );
};

Topbar.propTypes = {
  setFilters: PropTypes.func,
  setPage: PropTypes.func,
};
export default Topbar;
