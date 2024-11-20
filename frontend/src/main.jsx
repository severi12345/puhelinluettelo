import { StrictMode } from 'react' //
import { createRoot } from 'react-dom/client' //
import './index.css'
//import App from './App.jsx'
//import App2 from './App_alp.jsx'
//import App from './App3.jsx'
import App from './App_rontti_severi.jsx'
//import App from './App_hakut.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
