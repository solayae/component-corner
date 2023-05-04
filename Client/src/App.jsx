import './App.css';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import SignInPage from './views/SignInPage/SignInPage';
import Home from './components/Home/Home'
import BoardUser from './components/BoardUser/BoardUser'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registrarse" element={<SignInPage />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/user" element={<BoardUser/>} />
        <Route path="/resgister" element={<BoardUser/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
