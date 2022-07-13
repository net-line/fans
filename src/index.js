import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore  from './components/store-hooks/postings-store';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/testcontext';

configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthContextProvider>
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </AuthContextProvider>

  
);


