import React from 'react'
import ReactDOM  from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import App from './App'
import './index.css'
import './i18n';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer autoClose={5000}/>
      </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
