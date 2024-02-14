//redux almacena el estado inicial aca, en la reducer
//

import {
  GET_PRODUCTS,
  GET_BY_NAME,
  GET_BY_ID,
  SET_PAGE,
  ADD_TO_CART,
} from "../actions";

let initialState = {
  allProducts: [],
  posts: [],
  productsCopy: [], //esta copia va a ser lo mismo que allProducts para que cuando modifique algo (al hacer un filtrado se va a modificar mi estado), tenga la opcion de tener mi estado original.
  productId: "",
  currentPage: 1,
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allProducts: action.payload, //con la info que llega aca se modifica el estado de allUser.
        productsCopy: action.payload,
      };

    case GET_BY_NAME: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allProducts: action.payload, //con la info que llega aca se modifica el estado de allUser.
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case GET_BY_ID: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        productId: action.payload, //con la info que llega aca se modifica el estado de allUser.
        currentPage: 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload], // Agregar el producto al carrito
      };

    default:
      return state;
  }
}

export default rootReducer;
