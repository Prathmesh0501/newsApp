import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './Header.jsx'
import Layout from './Layout.jsx'
import News from './Business.jsx'
import Science from './Science.jsx'
import Sports from './Sports.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<News />} />
      <Route path='science' element={<Science />} />
      <Route path='sports' element={<Sports />} />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
