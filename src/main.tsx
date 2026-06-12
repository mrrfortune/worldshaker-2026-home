import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'

// 1. Import the Google Tag Manager module
import TagManager from 'react-gtm-module'

// 2. Configure your specific Google ID
const tagManagerArgs = {
    gtmId: 'AW-1059663010' // Replace with your Google Tag Manager ID or Google Tag ID
}

// 3. Initialize the script before rendering the app
TagManager.initialize(tagManagerArgs)
// Add the exclamation mark right after the closing parenthesis
const rootElement = document.getElementById('root')!; 

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

