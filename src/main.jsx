import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App/>
    
  // </BrowserRouter>,
<AuthProvider>
  <App />
</AuthProvider>
)
