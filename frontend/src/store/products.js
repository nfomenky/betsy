import { csrfFetch } from './csrf';

const GET_ALL_PRODUCTS = 'products/GET_ALL_PRODUCTS';
const GET_PRODUCT = 'products/GET_PRODUCT';

const getAllProducts = (products) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: products
  }
}

const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product
  }
}

export const selectAllProducts = () => {
  return async function(dispatch) {
    const response = await csrfFetch('/api/products');
    const data = await response.json();
    dispatch(getAllProducts(data));
    return response;
  }
}

export const selectProduct = (id) => {
  return async function(dispatch) {
    const response = await csrfFetch(`/api/products/${id}`);
    const data = await response.json();
    dispatch(getProduct(data));
    return response;
  }
}

const initialState = { products: null, product: null};

const productsReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_ALL_PRODUCTS:
      newState.products = action.payload;
      return newState;
    case GET_PRODUCT:
      newState.product = action.payload;
      return newState;
    default:
      return state;
  }
}

export default productsReducer;
