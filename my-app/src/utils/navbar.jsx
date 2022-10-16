import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{height:'50px',width:'100%',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <Link to='/adduser'>
          <Button >
         
            Add Jobs
           
        </Button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar