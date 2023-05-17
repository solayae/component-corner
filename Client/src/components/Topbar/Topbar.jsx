import styles from './Topbar.module.css';
import favorite from './assets/favorite-icon.png';
import cartImg from './assets/cart-icon.png';
import login from './assets/login-icon.png';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import logoCC from '../../assets/image/logo.jpg';
import imageFilter from '../../assets/image/filtrar.png';
import EventBus from '../../common/EventBus';
import { BsPersonCheck, BsPersonGear } from 'react-icons/bs';
import { MdAssessment } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';
import { clearMessage, getUserById } from '../../redux/actions';
import { Tooltip } from 'react-tooltip';

const Topbar = ({
  setFilters,
  filterDisplay,
  setFilterDisplay,
  cart,
  setPage,
  setCart,
}) => {
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  const [triggerPopUpSignUp, setTriggerPopUpSignUp] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  const userDetail = useSelector((state) => state.userInfo);
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const [showUser, setshowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    dispatch(getUserById(user?.id));
  }, [user?.id]);

  let categories = allProducts.map((e) => e.category);
  categories = [...new Set(categories)];
  const cartQuantity = cart.reduce((acc, el) => {
    return acc + el.quantity;
  }, 0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (['/', '/home'].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  // muestra y oculta el filtro en modo responsive
  const viewFilters = () => {
    filterDisplay.display === 'none'
      ? setFilterDisplay({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })
      : setFilterDisplay({ display: 'none' });
  };

  // Obtén la longitud del array original
  let length = categories.length;
  const handleClick = (e) => {
    setFilters([e]);
    setPage(0);
    navigate('/home');
  };

  const logOut = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setCart([]);
    //eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (user?.roles) {
      setshowUserBoard(user?.roles.includes('RoleUSER'));
      setShowAdminBoard(user?.roles.includes('RoleADMIN'));
    } else {
      setshowUserBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, [user, logOut]);

  // Divide el array en dos partes iguales
  let firstColumn = categories.slice(0, length / 2);
  let secondColumn = categories.slice(length / 2);

  return (
    <nav className={styles.topbar}>
      <Tooltip id='my-tooltip' />
      <div className={styles.row2}>
        <Link to={'/'}>
          <div className={styles.logo}>
            <img src={logoCC} alt='logo not found' />
          </div>
        </Link>
        <div className={styles.searchContainer}>
          <SearchBar
            setResults={setResults}
            input={input}
            setInput={setInput}
            results={results}
            setSelect={setSelect}
          />
          <SearchResults
            results={results}
            setResults={setResults}
            setInput={setInput}
            input={input}
            select={select}
          />
        </div>
        <div className={styles.icons}>
          {user && user.name ? (
            
            <div className={styles.favorite}>
              <Link to='/favorites'>
                <img
                  src={favorite}
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content='Favoritos'
                  alt='favorite-icon'
                />
              </Link>
              <div className={styles.badge}>{userDetail.favorite?.length}</div>
            </div>
          ) : (
            ''
          )}

          <div className={styles.cart}>
            <Link to='/cart'>
              {' '}
              <img
                src={cartImg}
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Carrito'
                alt='cart-icon'
              />
            </Link>
            <div className={styles.badge}>
              {cartQuantity > 9 ? '+9' : cartQuantity}
            </div>
          </div>

          {user && (
            <div className={styles.login}>
              <Link to={'/profile'} className='nav-link'>
                <BsPersonCheck
                  style={{ fontSize: '30px' }}
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content='Perfil'
                />
              </Link>
            </div>
          )}

          {showUser && (
            <div className={styles.login}>
              <Link to={'/user'} className='nav-link'>
                <MdAssessment
                  style={{ fontSize: '30px' }}
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content='Panel de usuario'
                />
              </Link>
            </div>
          )}
          {showAdminBoard && (
            <div className={styles.login}>
              <Link to={'/admin'} className='nav-link'>
                <BsPersonGear style={{ fontSize: '30px' }} />
              </Link>
            </div>
          )}

          {!showUser && !showAdminBoard && (
            <>
              <div className={styles.login}>
                <SignUp
                  trigger={triggerPopUpSignUp}
                  setTrigger={setTriggerPopUpSignUp}
                  setLoginTrigger={setTriggerPopUp}
                />
              </div>
              <div className={styles.login}>
                <Login
                  trigger={triggerPopUp}
                  setTrigger={setTriggerPopUp}
                  setTriggerSignUp={setTriggerPopUpSignUp}
                />
                <img
                  src={login}
                  onClick={() => {
                    setTriggerPopUp(true);
                  }}
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content='Iniciar sesión/Registrarse'
                  alt='login-icon'
                />
              </div>
            </>
          )}

          {(showUser || showAdminBoard) && (
            <>
              <div className={styles.login}>
                <Link to={'/home'} className='nav-link'>
                  <IoLogOutOutline
                    style={{ fontSize: '30px' }}
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content='Cerrar sesión'
                    onClick={logOut}
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.row2}>
        <Link to={'/home'} className={styles.about}>
          PRODUCTOS
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
                    href='#'
                    key={e}
                  >
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
                    href='#'
                    key={e}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href='#' className={styles.about}>
          <Link to={'/about'}>
          SOBRE NOSOTROS
          </Link>
        </a>
      { user
        ? <Link href='#' className={styles.about}>
          PEDIDO
          </Link>
        : ""}
        <img
          src={imageFilter}
          className={styles.ocultarFiltros}
          id='FILTER'
          onClick={() => viewFilters()}
        />
      </div>
    </nav>
  );
};

Topbar.propTypes = {
  setFilters: PropTypes.func,
  setPage: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  filterDisplay: PropTypes.object,
  setFilterDisplay: PropTypes.func,
};
export default Topbar;
