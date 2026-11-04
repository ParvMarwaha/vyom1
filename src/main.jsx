import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ?static  ->  show every scroll-reveal element in its final state (for screenshots / Figma capture)
if (new URLSearchParams(window.location.search).has('static')) {
  document.documentElement.classList.add('static-mode')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
