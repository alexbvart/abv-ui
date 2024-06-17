import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { AbvToastProvider } from './libs/ui/components/atoms/Toast/ToastProvider.tsx'
import App from './apps/app/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AbvToastProvider>
      <App />
    </AbvToastProvider>
  </React.StrictMode>,
)
