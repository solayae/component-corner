import styles from './Topbar.module.css';
import search from './assets/search-icon.png';
import axios from 'axios';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SearchBar({setResults, results, setSelect, input, setInput}) {
  const navigate = useNavigate()
  const [input, setInput] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e) => {
    console.log(e)
    const resultsLength = results.length;
    if (e.key === 'ArrowUp') {
      setActiveIndex(activeIndex === 0 ? resultsLength - 1 : activeIndex - 1);
    } else if (e.key === 'ArrowDown') {
      setActiveIndex(activeIndex === resultsLength - 1 ? 0 : activeIndex + 1);
    } else if (e.key === 'Enter') {
      navigate(`/products/${results[activeIndex].id}`);
      setResults([])
      setInput("")
      setActiveIndex(-1)
    }
  };

  useEffect(()=>{
    setSelect(activeIndex)
 },[activeIndex])


  const getData = async (value) => {
    try {
      let results = [];
      // const response = await axios.get(`http://localhost:3001/products/?name=${value}`);
      const response = await axios.get(`/products/?name=${value}`);
      if (value) results = response.data;
      setResults(results);
    } catch (error) {
      console.log(error.message);
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    getData(value);
    setActiveIndex(-1)
  };
  
 
  return (
    <div className={styles.search}>
      <input type="search" placeholder="Buscar productos"  
      value={input} 
      onChange={(e) => handleChange(e.target.value)} 
      onKeyDown={handleKeyDown}
       />
      <img src={search} alt="search-icon" />
    </div>
  );
}

export default SearchBar;
SearchBar.propTypes = {
  setResults: PropType.func,
  input: PropType.string,
  setInput: PropType.func,
};
