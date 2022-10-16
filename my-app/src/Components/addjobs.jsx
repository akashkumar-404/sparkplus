import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../Redux/action'

export const Addjobs = () => {
 const [jobs ,setJobs]=useState("")
 const [company_name,setCompany_name]=useState("")
 const [img,setImg]=useState("")
 const [salary,setSalary]=useState("")
 const [joining_date,setJoining_date]=useState("")
 const [discrip,setDiscrip]=useState("")
const dispatch=useDispatch()
const navigate=useNavigate()

  const handleAdd=()=>{
    const payload={
      jobs:jobs,
      company_name:company_name,
      salary:salary,
      joining_date:joining_date,
      discrip:discrip
    }
    dispatch(postUser(payload)).then((res) => {
      navigate("/");
    })
  }
  return (
    <div style={{height:'500px',width:'400px',margin:'auto',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <h1 style={{fontWeight:'bolder',fontSize:'20px'}}>ADD JOBS</h1>
       <div>
       <label >Job Title</label><br />
    <Input type="text"  name="job" onChange={(e)=>setJobs(e.target.value)} /><br />
    <label >Company</label><br />
    <Input type="text" id="company" name="company" onChange={(e)=>setCompany_name(e.target.value)} /><br />
    <div style={{display:'flex',margin:'auto',justifyContent:'space-between' }}>
      <div> 
    <label >salary</label>
    <br />
    <Input type="text"  name="salary" style={{width:'200px'}} onChange={(e)=>setSalary(e.target.value)}/></div>
      <div>
      <label >Joining Date-time</label><br />
      <Input type="text"  name="salary"  style={{width:'200px'}} onChange={(e)=>setJoining_date(e.target.value)}/>
      </div>
    </div>
    <br />
    <label >Description</label><br />
    <textarea id="w3review" name="w3review" rows="4" cols="50" style={{border:'1px solid',width:'100%'}} onChange={(e)=>setDiscrip(e.target.value)}>

    </textarea>
    <Button onClick={handleAdd} >Add Job</Button>

       </div>
    </div>
  )
}
