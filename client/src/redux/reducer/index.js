//redux almacena el estado inicial aca, en la reducer
//

import { GET_USERS, GET_BY_NAME, GET_BY_ID, SET_PAGE} from "../actions";

let initialState = {
  allUsers: [],
  posts: [],
  usersCopy: [], //esta copia va a ser lo mismo que allUsers para que cuando modifique algo (al hacer un filtrado se va a modificar mi estado), tenga la opcion de tener mi estado original.
  userId:"",
  currentPage:1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allUsers: action.payload, //con la info que llega aca se modifica el estado de allUser.
        usersCopy: action.payload,
      };

    case GET_BY_NAME: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allUsers: action.payload, //con la info que llega aca se modifica el estado de allUser.
      };
      case SET_PAGE:
        return {
          ...state,
          currentPage:action.payload
        }

    case GET_BY_ID: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        userId: action.payload, //con la info que llega aca se modifica el estado de allUser.
        currentPage:1,
      };

    default:
      return state;
  }
}

export default rootReducer;
