import { AddIcon, DeleteIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../Redux/action'

const Menudot = ({id}) => {
    const dispatch=useDispatch()
    console.log(id)
    const handleDelete=(id)=>{
        dispatch(deleteUser(id))
     }

  return (
    <div>
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <Link to={`/edit/${id}`} >
    <MenuItem icon={<EditIcon />} command='⌘T'>
     Edit
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} command='⌘N' onClick={()=>handleDelete(id)}>
      Delete
    </MenuItem>
    
  </MenuList>
</Menu>
    </div>
  )
}

export default Menudot