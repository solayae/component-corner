import styles from './Topbar.module.css';
import favorite from './assets/favorite-icon.png';
import cartImg from './assets/cart-icon.png';
import login from './assets/login-icon.png';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import {useState, useCallback} from 'react';
import {Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import {useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import { clearMessage, logout } from '../../redux/actions'
import EventBus from "../../common/EventBus";
import { BsPersonCheck } from 'react-icons/bs'
import { MdAssessment } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
const Topbar = ({setFilters, cart, setPage}) => {
  const [triggerPopUp, setTriggerPopUp] = useState(false);
  const [triggerPopUpSignUp, setTriggerPopUpSignUp] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation()
  const productState = useSelector((state) => state.products);
  const allProducts = [...productState];
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  let categories = allProducts.map((e) => e.category);
  categories = [...new Set(categories)];

  const cartQuantity = cart.reduce((acc, el) => {
    return acc + el.quantity;
  }, 0);
  const dispatch = useDispatch()

  useEffect(() => {
    if (["/", "/home"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  // Obtén la longitud del array original
  let length = categories.length;
  const handleClick = (e) => {
    setFilters([e]);
    setPage(0);
    navigate('/home');
  };

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (user?.roles) {
      setShowModeratorBoard(user?.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user?.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [user, logOut]);



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
          <SearchBar
            setResults={setResults}
            input={input}
            setInput={setInput}
            results={results}
            setSelect={setSelect}
          />
          <SearchResults results={results} setResults={setResults} setInput={setInput} input={input} select={select} />
        </div>
        <div className={styles.icons}>
          <div className={styles.favorite}>
            {' '}
            <img src={favorite} alt="favorite-icon" />
            <div className={styles.badge}>0</div>
          </div>
          <div className={styles.cart}>
            <Link to="/cart">
              {' '}
              <img src={cartImg} alt="cart-icon" />
            </Link>
            <div className={styles.badge}>{cartQuantity > 9 ? '+9' : cartQuantity}</div>
          </div>
          

          {user ? (<> 
            <div className={styles.login}>
              <Link to={"/profile"} className="nav-link">
                    <BsPersonCheck style={{fontSize:'30px'}}/>
              </Link>
            </div>
            <div className={styles.login}>
              <Link to={"/user"} className="nav-link">
                    <MdAssessment style={{fontSize:'30px'}}/>
              </Link>
            </div>
            <div className={styles.login}>
              <Link to={"/home"} className="nav-link">
                    <IoLogOutOutline style={{fontSize:'30px'}} onClick={logOut}/>
              </Link>
            </div>
            </>
          ):(
            <>
            <div className={styles.login}>
            <SignUp trigger={triggerPopUpSignUp} setTrigger={setTriggerPopUpSignUp} setLoginTrigger={setTriggerPopUp} />
          </div>
            <div className={styles.login}>
            <Login trigger={triggerPopUp} setTrigger={setTriggerPopUp} setTriggerSignUp={setTriggerPopUpSignUp} />
            <img
              src={login}
              onClick={() => {
                user ? navigate('/user') : setTriggerPopUp(true);
              }}
              alt="login-icon"
            />
          </div>
            </>
           
          ) 
        }

          
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
  cart: PropTypes.array,
};
export default Topbar;
