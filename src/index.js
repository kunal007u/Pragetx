import React, { Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Loader from './Components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Suspense fallback={<Loader />}>

      <App />
      <ToastContainer />
    </Suspense>
  </BrowserRouter>
  // </React.StrictMode>
);

