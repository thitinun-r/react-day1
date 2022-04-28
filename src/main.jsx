import React from 'react'
import ReactDOM from 'react-dom/client'
import AppClass from './AppClass'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppClass />
  </React.StrictMode>
)
