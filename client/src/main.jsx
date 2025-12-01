import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import {UserContextProvider} from './context/userContext.jsx'
import { SocketProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
          <SocketProvider>
            <App />
          </SocketProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>
)
