import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h3 className='text-5xl font-bold bg-slate-200 text-center'>Hello World</h3>
    <RouterProvider router={router} />,
  </StrictMode>,
)
