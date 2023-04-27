import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Views/LandingPage/LandingPage';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
