import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './apps/App/App.tsx'
import { AbvToastProvider } from './libs/ui/components/atoms/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AbvToastProvider>
      <App />
    </AbvToastProvider>
  </React.StrictMode>,
)
