import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({childern,authentication=true}) {

  const authStatus=useSelector((state)=>state.auth.status)

  const navigate = useNavigate()
  const [loader,setLoader]=useState(true)

  useEffect(()=>{
    if(authentication && authStatus !== authentication ){
      navigate("/login")
    }
    else if(!authentication/** if authentication not there means it is true */ && authStatus !== authentication){
      navigate("/")
    }
    setLoader(false)
  },[authStatus,authentication,navigate])
  return loader ? null :<>{childern}</>
}

export default Protected


