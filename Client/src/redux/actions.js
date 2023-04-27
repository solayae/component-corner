import axios from 'axios';
import { GET_ALL_PRODUCTS, ORDER_BY, FILTER_BY_CATEGORY, FILTER_BY_BRAND } from './variables';

export function getAllProducts() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/products/');
    const allProducts = response.data;
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: allProducts,
    });
  };
}

export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order })
  }
};

export function filterByCategory(category) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_CATEGORY, payload: category })
  }
};

export function filterByBrand(brand) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_BRAND, payload: brand })
  }
};

