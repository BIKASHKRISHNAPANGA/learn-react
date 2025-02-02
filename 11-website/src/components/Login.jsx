import React from 'react'
import { useState}from 'react'
import authService from "../appwrite/auth"
import {Link , useNavigate} from "react-router-dom"
import Button from "./Button"
import Input from './Input'
import Logo from './Logo'
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import {login} from "../store/authSlice"



function Login() {
    const navigate = useNavigate()
    const dispatch= useDispatch()
    const {register, handleSubmit}= useForm()
    const [error,setError]=useState("")
    const Login=async(data)=>{
        setError("")
    }
  return (
    <div>Login</div>
  )
}

export default Login