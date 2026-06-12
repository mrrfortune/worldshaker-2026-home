import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx' // Removed .tsx extension
import './styles/index.css'

// Added the ! operator to guarantee the root element exists
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
  