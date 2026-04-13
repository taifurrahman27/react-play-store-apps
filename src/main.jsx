import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/apps';
import InstalledApps from './pages/installedApps/InstalledApps';
import Homepage from './pages/homepage/Homepage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "/apps",
        element: <Apps />
      },

      {
        path: "/installedApps",
        element: <InstalledApps />
      },
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
