import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './redux/actions';
import Footer from './components/Footer/Footer.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
const Detail = lazy(() => import('./views/Detail/Detail'));
const Home = lazy(() => import('./views/Home/Home'));
const LandingPage = lazy(() => import('./views/LandingPage/LandingPage'));
const Cart = lazy(() => import('./views/Cart/Cart'));
const Favorites = lazy(() => import('./views/Favorites/Favorites'));
// import Favorites from './views/Favorites/Favorites';
import CustomLoader from './components/CustomLoader/CustomLoader';
import useLocalStorage from './components/useLocalStorage';
import BoardUser from './components/BoardUser/BoardUser';
import BoardAdmi from './components/BoardAdmin/Board/BoardAdmin';
import Profile from './components/Profile/Profile';
import axios from 'axios';
import Qa from './views/qa/qa';
const About = lazy(() => import('./views/About/About'));
import PaymentHistory from './views/PaymentHistory/PaymentHistory';

// DEPLOY:
axios.defaults.baseURL = 'https://component-corner-production.up.railway.app/';

//LOCAL:
// axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useLocalStorage('filter_cards-Home', []);
  const [page, setPage] = useLocalStorage('page', 0);
  const [cart, setCart] = useLocalStorage('cart', []);
  const [favoriteChanges, setFavoriteChanges] = useState(false)
  const products = useSelector((state) => state.products);
  const [filterDisplay, setFilterDisplay] = useState({
    display: 'none',
  });

  const dispatch = useDispatch();
  const getProducts = async () => {
    return dispatch(getAllProducts());
  };
  useEffect(() => {
    const productsToState = async () => {
      try {
        if (!products.length) await getProducts();
        setMounted(true);
      } catch (error) {
        console.log(error);
      }
    };
    productsToState();
    //eslint-disable-next-line
  }, [mounted]);

  return (
    <div className='App'>
      <Topbar
        setFilters={setFilters}
        setPage={setPage}
        cart={cart}
        setCart={setCart}
        filterDisplay={filterDisplay}
        setFilterDisplay={setFilterDisplay}
        favoriteChanges={favoriteChanges}
      />
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          <Route path='/user' element={<BoardUser />} />
          <Route exact path='/' element={<LandingPage />} />
          <Route
            path='/products/:id'
            element={<Detail cart={cart} setCart={setCart} favoriteChanges={favoriteChanges} setFavoriteChanges={setFavoriteChanges} />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin' element={<BoardAdmi />} />
          <Route
            path='/home'
            element={
              <Home
                filters={filters}
                setFilters={setFilters}
                page={page}
                setPage={setPage}
                filterDisplay={filterDisplay}
              />
            }
          />
          <Route
            path='/cart'
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path='/favorites' element={<Favorites setFavoriteChanges={setFavoriteChanges} favoriteChanges={favoriteChanges}/>} />
          <Route path='/qa' element={<Qa />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment/history' element={<PaymentHistory />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
