import {
  GET_ALL_PRODUCTS,
  ORDER_BY,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
} from './variables';

const initialState = {
  products: [],
  filtered: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ORDER_BY:
      if (action.payload === 'A-Z') {
        return {
          ...state,
          products: [...state.products].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }
      if (action.payload === 'Z-A') {
        return {
          ...state,
          products: [...state.products].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }
      if (action.payload === 'desc') {
        return {
          ...state,
          products: [...state.products].sort(
            (prev, next) => prev.price - next.price
          ),
        };
      }
      if (action.payload === 'asc') {
        return {
          ...state,
          products: [...state.products].sort(
            (prev, next) => next.price - prev.price
          ),
        };
      } else {
        return { ...state, filtered: state.products };
      }

    case FILTER_BY_CATEGORY:
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

    case FILTER_BY_BRAND:
      const brandFilter =
        action.payload === 'All'
          ? state.products
          : state.products.filter((el) =>
              el.brand.map((el) => el).includes(action.payload)
            );
      return {
        ...state,
        filtered: brandFilter.length ? brandFilter : state.products,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
