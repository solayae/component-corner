import axios from 'axios';
import authService from '../services/authService';
import {
  GET_ALL_PRODUCTS,
  ORDER_BY,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_ALL,
  RESGITER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_SUCCESS

} from './variables';


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
    dispatch({ type: ORDER_BY, payload: order });
  };
}

export function filterByCategory(category) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_CATEGORY, payload: category });
  };
}

export function filterByBrand(brand) {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_BRAND, payload: brand });
  };
}


export const setMessage = (message)=>({
  type: SET_MESSAGE,
  paload:message
})

export const clearMessage = ()=>({
  type: CLEAR_MESSAGE
})

export const register = (name, email, password)=>(dispatch)=>{
  return authService.register(name, email, password)
                    .then((response)=>{
                      dispatch({
                        type: REGISTER_SUCCESS
                      })
                      return Promise.resolve()
                    }, 
                    (error)=>{
                      const message = (
                        error.reponse &&
                        error.reponse.data &&
                        error.response.data.message) ||
                        error.message || 
                        error.toString()
                        dispatch({
                          type: RESGITER_FAIL
                        })

                        dispatch({
                          type : SET_MESSAGE,
                          payload : message
                        })
                         
                        return Promise.reject()
                     }
                    )
}


export const login = (email, password)=>(dispatch)=>{
  return authService.login(email, password)
          .then((data)=>{
            dispatch({
              type: LOGIN_SUCCESS,
              payload : { user : data}
            })
            return Promise.resolve()
          }, 
          (error)=>{
            const message =
            (
              error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString()

            dispatch({
              type: LOGIN_FAIL
            })
            return Promise.reject()
          }
          
      )
}


export const logout = ()=>dispatch=>{
  authService.logout()
  dispatch({
    type: LOGOUT
  })
}