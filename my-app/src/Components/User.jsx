


import { Box, Grid, position } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUser, patchUser, postUser } from '../Redux/action'
import Menudot from '../utils/menudot'
import Navbar, { Popup } from '../utils/navbar'

const User = () => {
    const user=useSelector(state=>state.user)
    console.log(user)
    const dispatch=useDispatch()
    const [text,setText]=useState("")
    useEffect(()=>{
      dispatch(getUser())
      console.log()
    },[dispatch])

    
     
    


    

    
  return (
    <>
    <Navbar />
        <h1>JOBS</h1>
    {/* <div>
         <input value={text} onChange={(e)=>setText(e.target.value)}/>
         <button onClick={handleAdd}>Add</button>
    </div> */}
    <Grid templateColumns='repeat(2, 1fr)' gap={6} width='60%' margin='auto'  padding='10px'>
    {user.length>0&&user.map((item)=>{
      return(  
        <div style={{paddingLeft:'40px',paddingRight:'20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <Box key={item.id} style={{height:"auto","width":"300px",backgroundColor:'white',color:'black'}}>
        <div style={{position: 'relative',
  left: '40%'}}>
        <Menudot id={item.id} />
        </div>
          <div style={{textAlign:'start',fontWeight:'bolder'}}>{item.jobs}</div>
          <div style={{display:'flex',width:'50%',justifyContent:'space-evenly'}}>
          <div><img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/tcs_logo_1200_020621101143.jpg?size=1200:675' style={{width:'40px',borderRadius:'10px'}}/></div>
          <div style={{fontWeight:'bold'}}>{item.company_name}</div>
          </div>
          <div style={{display:'flex',justifyContent:'space-evenly',width:'100%'}}>
          <div>Salary:{item.salary}</div>
          <div style={{width:'60%',height:'70px',display:'flex'}}>Joining Date:{item.joining_date}</div>
          </div>
          <div >{item.discrip}</div>
           {/* <span>{item.id}.</span>
           <span>{item.title}-</span>
           <span>{item.status?"True":"False"}</span>
           <button onClick={()=>handleToggle(item.id,item.status)}>Toggle</button>
           <button onClick={()=>handleDelete(item.id)}>Delete</button> */}
          
        </Box>
        </div>
     ) })
    }</Grid>
    </>
  )
}

export default User