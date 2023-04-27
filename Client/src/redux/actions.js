import axios from 'axios';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

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
export {GET_ALL_PRODUCTS};
