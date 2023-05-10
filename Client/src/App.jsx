import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Detail from './views/Detail/Detail';
//import SignInPage from './views/SignInPage/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './redux/actions';
import { useEffect, useState } from 'react';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import FormProduct from './views/FormProduct/FormProduct';
import useLocalStorage from './components/useLocalStorage';
import BoardUser from './components/BoardUser/BoardUser';
import BoardAdmi from './components/BoardAdmin/BoardAdmin';
import Profile from './components/Profile/Profile';
import Cart from './views/Cart/Cart';
import Favorites from './views/Favorites/Favorites';
import axios from 'axios';
axios.defaults.baseURL = 'https://component-corner-production.up.railway.app/';

axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useLocalStorage('filter_cards-Home', []);
  const [page, setPage] = useLocalStorage('page', 0);
  const [cart, setCart] = useLocalStorage('cart', []);
  const products = useSelector((state) => state.products);
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
      {/* <Routes>
    <Route path="/user" element={<BoardUser/>} />
    </Routes> */}

      <Topbar
        setFilters={setFilters}
        setPage={setPage}
        cart={cart}
        setCart={setCart}
      />
      <Routes>
        <Route path='/user' element={<BoardUser />} />
        <Route exact path='/' element={<LandingPage />} />
        <Route
          path='/products/:id'
          element={<Detail cart={cart} setCart={setCart} />}
        />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<BoardAdmi />} />

        {/* <Route path="/registrarse" element={<SignInPage />} /> */}
        <Route
          path='/home'
          element={
            <Home
              filters={filters}
              setFilters={setFilters}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path='/publicar' element={<FormProduct />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
