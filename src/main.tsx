import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './mod.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>SRML Config Tool</h1>
    <App />
  </React.StrictMode>,
)
