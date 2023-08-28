import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AppRouting from './routes/AppRouting';
import { useLocation } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';


function App() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then((responseJson => {
      console.log("🚀 ~ file: App.js:18 ~ App ~ responseJson:", responseJson)
      cookies.set('_co&0kie', responseJson, { path: '/' });
    }))

  const cookies = new Cookies();

  useEffect(() => {
    setIsLoading(false);
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [pathname]);


  return (
    <>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="App">
            <Header />
            <AppRouting />
            <Footer />
            <ToastContainer />
          </div>
        )
      }
    </>

  );
}

export default App;
