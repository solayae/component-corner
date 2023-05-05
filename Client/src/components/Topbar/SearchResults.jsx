import {Link} from 'react-router-dom';
import style from './Topbar.module.css';
import PropTypes from 'prop-types';

export default function SearchResults({results, setResults, setInput, input, select}) {

  
  if (results.length)
    return (
      <div className={style.searchResults}>
        {results.map((e, index) => (
          <Link
            key={e.id}
            to={`/products/${e.id}`}
            onClick={() => {
              setResults([]);
              setInput('');
            }}>
            <div key={e.id} className={`${style.results} ${index === select ? style.activeOption : ''} `}>
              <p>{e.name}</p>
              <img src={e.image} alt={e.name} />
            </div>
          </Link>
        ))}
      </div>
    );
  if (input)
    return (
      <div className={style.searchResults}>
        <div className={style.noResults}>
          <p>{`No se encontró el producto "${input.length > 10 ? input.slice(0, 10) + '...' : input}"`}</p>
        </div>
      </div>
    );
}
SearchResults.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string,
};
