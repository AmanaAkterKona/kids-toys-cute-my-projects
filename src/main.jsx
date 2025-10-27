import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import CartProvider from './provider/CartContext.jsx'
import { Toaster } from 'react-hot-toast' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <>
          <RouterProvider router={router}></RouterProvider>
          <Toaster position="top-center" />   
        </>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
