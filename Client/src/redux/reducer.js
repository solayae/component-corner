import {
  GET_ALL_PRODUCTS,
  GET_DETAIL,
  CLEAN_DETAIL,
  ORDER_BY,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  GET_PRODUCTS_BY_NAME,
} from './variables';

const initialState = {
  products: [],
  filtered: [],
  detail: [],
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
    default:
      return {...state};
  }
};

export default rootReducer;
