import style from './Home.module.css';
import PropTypes from 'prop-types';

export default function FilterContainer({categories, handleSort, sort, handleFilters, filters, input, handleInput}) {
  const byName = ['A-Z', 'Z-A'];
  const byPrice = ['Menor a mayor', 'Mayor a menor'];
  const inputRadio = (arr) => {
    return arr.map((e) => (
      <div key={e}>
        <label htmlFor={e}>{e}</label>
        <input type="radio" id={e} name="SortBy" onChange={() => handleSort(e)} checked={sort === e} />
      </div>
    ));
  };

  return (
    <div className={style.filterContainer}>
      <form>
        <h2>Ordenar</h2>
        <h3>Por Nombre</h3>
        <div className={style.inputContainer_radio}>{inputRadio(byName)}</div>
        <h3>Por Precio</h3>
        <div className={style.inputContainer_radio}>{inputRadio(byPrice)}</div>
      </form>
      <form>
        <h2>Filtrar</h2>
        <div className={style.inputContainer_checkbox}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre..."
            value={input}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          {categories.map((e) => (
            <div key={e}>
              <label htmlFor={e}>{e}</label>
              <input
                type="checkbox"
                id={e}
                value={e}
                onChange={(e) => handleFilters(e)}
                checked={filters.includes(e)}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
FilterContainer.propTypes = {
  handleSort: PropTypes.func,
  handleInput: PropTypes.func,
  handleFilters: PropTypes.func,
  sort: PropTypes.string,
  input: PropTypes.string,
  filters: PropTypes.array,
  categories: PropTypes.array,
};
