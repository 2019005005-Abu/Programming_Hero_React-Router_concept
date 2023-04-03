import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import About from "./Component/About/About"
import Contact from "./Component/About/Contact"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import First from './Component/First/First';
import French from './Component/French/French';
import Friend from './Component/French/Friend';
import FriendDetails from './Component/French/FriendDetails';
import POst from './Component/Post/POst';
import POstDetails from './Component/Post/POstDetails';
import NoFoundPage from './Component/404_Folder/NoFoundPage';
const router=createBrowserRouter([
  {path:'/',element:<Home></Home>,
  children:[
    {path:"/",element:<First/>},
    {
      path:"/friends",
      element:<French/>,
      loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts/1/users`),

  },{
    path:'/friend/:friendId',
    element:<FriendDetails/>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`),
     
  },{
    path:"/post",
    element:<POst></POst>,
    loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
  },{
    path:'/post/:post_Id',
    element:<POstDetails></POstDetails>,
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_Id}`),
    
  },{
    path:'*',
    element:<NoFoundPage></NoFoundPage>

  },
    {path:"/about" ,element:<About/>},
    {path:"/contact",element:<Contact></Contact>}
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><RouterProvider router={router}></RouterProvider></React.StrictMode>,
)
