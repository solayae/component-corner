import styles from './Topbar.module.css';
import search from './assets/search-icon.png';
import {useState} from 'react';
import axios from 'axios';
import PropType from 'prop-types';

function SearchBar({setResults}) {
  const [input, setInput] = useState('');

  const getData = async (value) => {
    try {
      let results = [];
      const response = await axios.get(`http://localhost:3001/products/?name=${value}`);
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
  };
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Buscar productos" value={input} onChange={(e) => handleChange(e.target.value)} />
      <img src={search} alt="search-icon" />
    </div>
  );
}

export default SearchBar;
SearchBar.propTypes = {
  setResults: PropType.func,
};
