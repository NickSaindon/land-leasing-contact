import { useEffect } from 'react';
import '../styles/globals.scss';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../context/ToastContext';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
      <ToastProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ToastProvider>

  )
}

export default MyApp;
