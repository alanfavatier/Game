import axios from "axios"

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const SET_PAGE = "SET_PAGE"
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const ADD_TO_CART_FROM_STORAGE = "ADD_TO_CART_FROM_STORAGE";

export function getProducts(){
    return async function(dispatch){
        const response = await axios("/products")
        return dispatch({
            type:"GET_PRODUCTS",//aca se define el tipo de accion que se manda
            payload: response.data //esta info se la mando al reducer que va a ser la encargada de modificar el estado;
        })
    }

}
export function getByName(name){
    return async function(dispatch){
        const response = await axios(`/products/?name=${name}`)
        return dispatch({
            type:"GET_BY_NAME",//aca se define el tipo de accion que se manda
            payload: response.data //esta info se la mando al reducer que va a ser la encargada de modificar el estado;
        })
    }

}
 export function getById(id){
    return async function(dispatch){
        const response = await axios(`/products/${id}`)
        return dispatch({
            type:"GET_BY_ID",//aca se define el tipo de accion que se manda
            payload: response.data //esta info se la mando al reducer que va a ser la encargada de modificar el estado;
        })
    }

}  
 export function setPage(pageNumber){
    return{
        type: SET_PAGE,
        payload:pageNumber
    }
}  



export function addToCart(product) {
  return async function(dispatch) {
      dispatch({
        type: ADD_TO_CART,
        payload: product
      });
  };
}

export function getProductsByCategory(category) {
    return async function(dispatch) {
      try {
        const response = await axios.get(`/category?category=${category}`);
        dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          payload: response.data
        });
      } catch (error) {
        console.error('Error fetching products by category:', error);
        // Puedes manejar el error según tus necesidades, como mostrando un mensaje al usuario
      }
    };
  }

  export function getCartFromStorage() {
    return function(dispatch) {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        // Si hay un carrito guardado en localStorage, envía los productos al reducer
        dispatch({
          type: ADD_TO_CART_FROM_STORAGE,
          payload: JSON.parse(savedCart),
        });
      }
    };
  }