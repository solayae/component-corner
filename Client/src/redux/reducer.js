import {
  GET_ALL_PRODUCTS,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_PRODUCTS_BY_NAME,
  LOGOUT,
  SET_MESSAGE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
<<<<<<< HEAD
  GET_USER_BY_ID,
=======
  GET_IMAGEN,
  UPDATE_PROFILE,
  GET_USER_BY_ID


>>>>>>> profile
} from './variables';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  products: [],
  filtered: [],
  detail: [],
  filters: [],
  message: [],
  userInfo: [],
  user: user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filtered: action.payload,
      };

    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        filtered: action.payload,
      };

    case GET_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }

    case GET_USER_BY_ID:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: { isLoggedIn: false },
      };
    case REGISTER_FAIL:
      return {
        ...state,
        user: { isLoggedIn: false },
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: { isLoggedIn: true, user: action.payload.user },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: { isLoggedIn: false, user: null },
      };

    case LOGOUT:
      return {
        ...state,
        user: { isLoggedIn: false, user: null },
      };

<<<<<<< HEAD
    default:
      return state;
=======
        case LOGOUT: 
            return{
                ...state, 
                user : { isLoggedIn: false,   user: null}
                
              
            }
        case GET_IMAGEN:
          return {
            ...state,
            user:  {isLoggedIn: true, user: action.payload}
          }

        case UPDATE_PROFILE:
          return {
            ...state, 
              user:  {isLoggedIn: true, user: action.payload}
          }

        default:
          return state;
>>>>>>> profile
  }
};

export default rootReducer;
