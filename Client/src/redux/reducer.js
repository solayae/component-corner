import {GET_ALL_PRODUCTS, ORDER_BY, FILTER_BY_CATEGORY, FILTER_BY_BRAND,SET_MESSAGE, CLEAR_MESSAGE, REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT } from './variables';

  const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  products: [],
  filtered: [],
  message: [],
  user: user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY: {
      const orderType = {
        'A-Z': {
          ...state,
          products: [...state.products].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        },
        'Z-A': {
          ...state,
          products: [...state.products].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        },
        des: {
          ...state,
          products: [...state.products].sort((prev, next) => prev.price - next.price),
        },
        asc: {
          ...state,
          products: [...state.products].sort((prev, next) => next.price - prev.price),
        },
      };
      return orderType[action.payload];
    }
    case FILTER_BY_CATEGORY: {
      const categoryFilter =
        action.payload === 'All'
          ? state.products
          : state.products.filter((el) => el.category.map((el) => el).includes(action.payload));
      return {
        ...state,
        filtered: categoryFilter.length ? categoryFilter : state.products,
      };
    }
    case FILTER_BY_BRAND: {
      const brandFilter =
        action.payload === 'All' ? state.products : state.products.filter((el) => el.brand.includes(action.payload));
      return {
        ...state,
        filtered: brandFilter.length ? brandFilter : state.products,
      };
    }
    case SET_MESSAGE:
            return { 
              ...state,
              message : action.payload
             }

        case CLEAR_MESSAGE:
            return { 
              ...state,
              message : ''
            }
            case REGISTER_SUCCESS: 
            return {
                ...state, 
                user: {isLoggedIn: false }
            }
        case REGISTER_FAIL:
            return {
                ...state,
                user: {isLoggedIn: false }

            }

        case LOGIN_SUCCESS :
            return {
                ...state,                
                user:  {isLoggedIn: true, user: action.payload.user}
            }
        case LOGIN_FAIL:
            return {
                ...state,
                user: { isLoggedIn: false, user: null }
                
                
            }

        case LOGOUT: 
            return{
                ...state, 
                user : { isLoggedIn: false,   user: null}
                
              
            }
        
    default:
      return state;
  }
};

export default rootReducer;
