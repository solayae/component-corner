import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import Footer from './components/Footer/Footer.jsx';
import SignInPage from './views/SignInPage/SignInPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrarse" element={<SignInPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
