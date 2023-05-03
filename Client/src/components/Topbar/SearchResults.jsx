import {Link} from 'react-router-dom';
import style from './Topbar.module.css';
import PropTypes from 'prop-types';

export default function SearchResults({results, setResults, setInput}) {
  if (results.length)
    return (
      <div className={style.searchResults}>
        {results.map((e) => (
          <Link
            key={e.id}
            to={`/products/${e.id}`}
            onClick={() => {
              setResults([]);
              setInput('');
            }}>
            <div key={e.id} className={style.results}>
              <p>{e.name}</p>
              <img src={e.image} alt={e.name} />
            </div>
          </Link>
        ))}
      </div>
    );
}
SearchResults.propTypes = {
  results: PropTypes.array,
  setResults: PropTypes.func,
  setInput: PropTypes.func,
};
