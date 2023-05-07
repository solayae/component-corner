import axios from 'axios';
import authService from '../services/authService';
import {
  GET_ALL_PRODUCTS,
  GET_DETAIL,
  CLEAN_DETAIL,
  ORDER_BY,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  GET_PRODUCTS_BY_NAME,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './variables';

export function getAllProducts() {
  return async function (dispatch) {
    const response = await axios.get('/products/');
    const allProducts = response.data;
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: allProducts,
    });
  };
}
export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/?name=${name}`);
      const filteredProduct = response.data;
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: filteredProduct,
      });
    } catch (error) {
      console.log(error.message);
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: [],
      });
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`/products/${id}`);
    const productId = response.data;
    return dispatch({
      type: GET_DETAIL,
      payload: productId,
    });
  };
}

export function cleanDetail() {
  return {
    type: CLEAN_DETAIL,
  };
}

export function orderBy(order) {
  return function (dispatch) {
    dispatch({type: ORDER_BY, payload: order});
  };
}

export function filterByCategory(category) {
  return function (dispatch) {
    dispatch({type: FILTER_BY_CATEGORY, payload: category});
  };
}

export function filterByBrand(brand) {
  return function (dispatch) {
    dispatch({type: FILTER_BY_BRAND, payload: brand});
  };
}

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  paload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export function register(name, email, password) {
  return async function () {
    try {
      const response = await axios.post('/api/auth/signup', {name, email, password});
      return response;
    } catch (error) {
      return error.response;
    }
  };
}

export const login = (email, password) => (dispatch) => {
  return authService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {user: data},
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: LOGOUT,
  });
};
