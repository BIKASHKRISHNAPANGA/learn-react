import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {githubInfoLoader} from'./components/Github/Github.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path='' element={<Home/>}/>
       <Route path='about/' element={<About/>}/>
       <Route path='user/' element={<User />} >
       <Route path=':userid' element={<User />} />
       </Route>
       <Route path='Contact/' element={<Contact/>}/>
       <Route loader={githubInfoLoader} path='Github/' element={<Github/>}/>
       </Route>
     
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
