import * as types from "./actionTypes"
import axios from "axios"


  const getUser=()=>(dispatch)=>{
         dispatch({type:types.GET_USER_REQUEST})
        return axios.get("https://obscure-stream-21364.herokuapp.com/user").then((res)=>{
           return dispatch({type:types.GET_USER_SUCESS,payload:res.data})
        }).catch((err)=>{
            dispatch({type:types.GET_USER_FAILURE})
        })
  }
  const postUser=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_USER_REQUEST})
   return axios.post("https://obscure-stream-21364.herokuapp.com/user",payload).then((res)=>{
      return dispatch({type:types.POST_USER_SUCESS,payload:payload})
   }).catch((err)=>{
       dispatch({type:types.POST_USER_FAILURE})
   })
}
const deleteUser=(id)=>(dispatch)=>{
    dispatch({type:types.DELETE_USER_REQUEST})
   return axios.delete(`https://obscure-stream-21364.herokuapp.com/user/${id}`).then((res)=>{
      return dispatch({type:types.DELETE_USER_SUCESS,payload:id})
   }).catch((err)=>{
       dispatch({type:types.DELETE_USER_FAILURE})
   })
}
const patchUser=(id,payload)=>(dispatch)=>{
    dispatch({type:types.PATCH_USER_REQUEST})
   return axios.patch(`https://obscure-stream-21364.herokuapp.com/user/${id}`,payload).then((res)=>{
      return dispatch({type:types.PATCH_USER_SUCESS,payload:payload})
   }).catch((err)=>{
       dispatch({type:types.PATCH_USER_FAILURE})
   })
}


  export {getUser,postUser,deleteUser,patchUser}