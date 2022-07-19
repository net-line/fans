import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStore  from './components/store-hooks/postings-store';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/testcontext';
import "./i18n"

configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Suspense fallback="...Loading">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  </AuthContextProvider>
);


