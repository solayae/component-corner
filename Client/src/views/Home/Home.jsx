import Cards from '../../components/Cards/Cards';
import {useSelector, useDispatch} from 'react-redux';
import style from './Home.module.css';
import FilterContainer from './FilterContainer';
import {useEffect, useState} from 'react';
import useLocalStorage from '../../components/useLocalStorage';
import {getProductsByName} from '../../redux/actions';
import PropTypes from 'prop-types';
// import userServices from  '../../services/userService';

export default function Home({filters, setFilters, page, setPage}) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useLocalStorage('sort_cards-Home', 'A-Z');
  const [input, setInput] = useLocalStorage('input-Home', '');
  const productState = useSelector((state) => state.products);
  const productsFiltered = useSelector((state) => state.filtered);
  const allProducts = [...productState];
  const allProductsFiltered = [...productsFiltered];
  const dispatch = useDispatch();
  // const [content, setContent ] = useState('')
  let categories = allProducts.map((e) => e.category);
  categories = [...new Set(categories)];

  const handleSort = (sort) => {
    setSort(sort);
    setPage(0);
  };
  const handlePage = (value) => {
    value === '+' && page < products.length / 12 - 1 && setPage(page + 1);
    value === '-' && page > 0 && setPage(page - 1);
  };
  const handleFilters = (event) => {
    let newFilterArray;
    if (event.target.checked) newFilterArray = [...filters, event.target.value];
    else newFilterArray = filters.filter((f) => f !== event.target.value);
    if (newFilterArray.length === categories.length) {
      setFilters([]);
      setPage(0);
      return;
    }
    setFilters(newFilterArray);
    setPage(0);
  };

  const handleInput = (e) => {
    dispatch(getProductsByName(e.target.value));
    setInput(e.target.value);
    setPage(0);
  };

  const sortList = {
    'A-Z': [
      ...allProductsFiltered.sort((prev, next) => {
        if (prev.name > next.name) return 1;
        if (prev.name < next.name) return -1;
        return 0;
      }),
    ],
    'Z-A': [
      ...allProductsFiltered.sort((prev, next) => {
        if (prev.name > next.name) return -1;
        if (prev.name < next.name) return 1;
        return 0;
      }),
    ],
    Ascendete: [...allProductsFiltered.sort((prev, next) => prev.price - next.price)],
    Descendente: [...allProductsFiltered.sort((prev, next) => next.price - prev.price)],
  };

  useEffect(() => {
    const sortedProducts = sortList[sort];
    const filteredProducts = filters.length
      ? [...sortedProducts.filter((e) => filters.includes(e.category))]
      : [...sortedProducts];
    setProducts(filteredProducts);
    //eslint-disable-next-line
  }, [productState, sort, filters, productsFiltered]);

  // useEffect(()=>{
  //   userServices.getPublicContent().then(
  //     (response)=>{
  //       setContent(response.data)
  //     },
  //     (error) =>{
  //       const _content =
  //       (error.response && error.response.data) ||
  //       error.message ||
  //       error.toString();
  //       setContent(_content)
  //     }
  //   )
  // }, [])

  return (
    //  content == 'Home' ?
    <div className={style.homePage}>
      <FilterContainer
        categories={categories}
        handleSort={handleSort}
        sort={sort}
        handleFilters={handleFilters}
        filters={filters}
        input={input}
        handleInput={handleInput}
      />
      <div className={style.home_cardsContainer}>
        <Cards products={[...products.slice(page * 12, (page + 1) * 12)]} />
        {!products.length && <h1>No se encontró el producto que buscas</h1>}
        <div className={style.searchButtons}>
          <button onClick={() => handlePage('-')}> - </button>
          <p>
            {page + 1}/{products.length !== 0 ? Math.ceil(products.length / 12) : 1}
          </p>
          <button onClick={() => handlePage('+')}> + </button>
        </div>
      </div>
    </div>
  )
  // :<div>
  //       {content}
  // </div>
}
Home.propTypes = {
  filters: PropTypes.array,
  setFilters: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
};
