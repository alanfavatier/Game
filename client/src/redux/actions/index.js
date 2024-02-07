import axios from "axios"

export const GET_USERS = "GET_USERS"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const SET_PAGE = "SET_PAGE"

export function getUsers(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/users")
        return dispatch({
            type:"GET_USERS",//aca se define el tipo de accion que se manda
            payload: response.data //esta info se la mando al reducer que va a ser la encargada de modificar el estado;
        })
    }

}
export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/users/?name=${name}`)
        return dispatch({
            type:"GET_BY_NAME",//aca se define el tipo de accion que se manda
            payload: response.data //esta info se la mando al reducer que va a ser la encargada de modificar el estado;
        })
    }

}
 export function getById(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/users/${id}`)
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