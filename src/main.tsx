import React from 'react'
import ReactDOM from 'react-dom/client'
import { AbvToastProvider } from './libs/ui/components/atoms/index.ts'
import App from './apps/app/App.tsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AbvToastProvider>
      <App />
    </AbvToastProvider>
  </React.StrictMode>,
)
