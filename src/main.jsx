import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import InstalledApps from './pages/installedApps/InstalledApps';
import Homepage from './pages/homepage/Homepage';
import Apps from './pages/apps/apps';
import AppDetails from './pages/appDetails/AppDetails';
import InstalledAppsProvider from './context/InstalledAppsProvider';
import { ToastContainer } from 'react-toastify';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/apps",
        element: <Apps />
      },

      {
        path: "/apps/:id",
        element: <AppDetails />,
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
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>

)
