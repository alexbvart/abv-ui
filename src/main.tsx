import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AbvToastProvider } from './libs/ui/components/atoms/Toast/ToastProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AbvToastProvider>
      <App />
    </AbvToastProvider>
  </React.StrictMode>,
)
