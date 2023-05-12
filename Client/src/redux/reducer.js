import {
  GET_ALL_PRODUCTS,
  GET_DETAIL,
  CLEAN_DETAIL,
  ORDER_BY,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  GET_PRODUCTS_BY_NAME,
  LOGOUT,
  SET_MESSAGE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USER_BY_ID,
  UPDATE_USER,
} from './variables';

const user = localStorage.getItem('user');

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

    case UPDATE_USER:
      const updatedUser = action.payload;
      if (updatedUser.hasOwnProperty('favorites')) {
        const favorites = updatedUser.favorites;
        if (isFavorite) {
          // Agregar un favorito
          return {
            ...state,
            users: state.users.map((user) => {
              if (user.id === updatedUser.id) {
                return {
                  ...user,
                  favorites: [...user.favorites, ...favorites],
                };
              } else {
                return user;
              }
            }),
          };
        } else {
          // Eliminar un favorito
          return {
            ...state,
            users: state.users.map((user) => {
              if (user.id === updatedUser.id) {
                return {
                  ...user,
                  favorites: user.favorites.filter(
                    (favorite) => !favorites.includes(favorite)
                  ),
                };
              } else {
                return user;
              }
            }),
          };
        }
      } else {
        // Actualización estándar sin cambios en favoritos
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.id === updatedUser.id) {
              return {
                ...user,
                ...updatedUser,
              };
            } else {
              return user;
            }
          }),
        };
      }

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
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
          products: [...state.products].sort(
            (prev, next) => prev.price - next.price
          ),
        },
        asc: {
          ...state,
          products: [...state.products].sort(
            (prev, next) => next.price - prev.price
          ),
        },
      };
      return orderType[action.payload];
    }
    case FILTER_BY_CATEGORY: {
      const categoryFilter =
        action.payload === 'All'
          ? state.products
          : state.products.filter((el) =>
              el.category.map((el) => el).includes(action.payload)
            );
      return {
        ...state,
        filtered: categoryFilter.length ? categoryFilter : state.products,
      };
    }
    case FILTER_BY_BRAND: {
      const brandFilter =
        action.payload === 'All'
          ? state.products
          : state.products.filter((el) => el.brand.includes(action.payload));
      return {
        ...state,
        filtered: brandFilter.length ? brandFilter : state.products,
      };
    }
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

    default:
      return state;
  }
};

export default rootReducer;
