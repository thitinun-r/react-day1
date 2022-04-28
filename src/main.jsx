import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Workshop from '../workshop/workshop'
import DemoProps from '../workshop/demoProps'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Workshop />
    <DemoProps />
  </React.StrictMode>
)
