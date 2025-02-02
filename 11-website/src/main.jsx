import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store.js'


import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Protected from './components/AuthLayout.jsx'
import Signup from './pages/Sigup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
      path: "/",
      element:<Home />,
      },
      {
      path:"/login",
      element:(
        <Protected authentication={false}>
          <Login />
        </Protected>
      )
      },
    {
      path:"/signup",
      element:(
        <Protected authentication={false}>
          <Signup/>
        </Protected>
      )
    },
    {
      path:"/all-posts",
      element:(
        <Protected authentication>
          <AllPosts/>
        </Protected>
      )
    },
    {
      path:"/add-post",
      element:(
        <Protected authentication>
          <AddPost/>
        </Protected>
      )
    },
    {
      path:"/post/:slug",
      element:(
        <Protected authentication>
          <Post/>
        </Protected>
      )
    },
    {
      path:"/edit-post/:slug",
      element:(
        <Protected authentication>
          <EditPost/>
        </Protected>
      )
    }
    
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)