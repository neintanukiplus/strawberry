import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Homepage from './pages/Homepage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
)
