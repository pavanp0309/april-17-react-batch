import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// step1: provide Routing Capabilities To React_App
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // step2: Wrapping the BrowserRouter To app to enable Routing
<BrowserRouter>
    <App />
</BrowserRouter>

)
