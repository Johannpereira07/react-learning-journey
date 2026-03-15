import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import { Home,About,Contact,User,Github,githubDataLoader } from './components'
import Layout from './layout'
import './index.css'

// const router = createBrowserRouter([     
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"", element:<Home/>},
//       {path:"about", element:<About/>},
//       {path:"contact", element:<Contact/>}
//     ]
//   },
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userId' element={<User/>}></Route>
      <Route 
       path='github' 
       element={<Github/>} 
       loader={githubDataLoader}
      >        
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
