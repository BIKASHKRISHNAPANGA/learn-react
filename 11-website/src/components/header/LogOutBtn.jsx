import React from 'react'
import { useDispatch } from 'react-redux'
import authServive from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogOutBtn() {
    const dispatch= useDispatch()

    const logoutHandler=()=>{
        authServive.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
   onClick={logoutHandler}>LogOut</button>
  )
}

export default LogOutBtn