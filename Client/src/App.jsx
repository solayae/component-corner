import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Footer from './components/Footer/Footer.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Detail from './views/Detail/Detail';
import SignInPage from './views/SignInPage/SignInPage';

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/registrarse' element={<SignInPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
