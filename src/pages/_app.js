import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>

          <Component {...pageProps} />

      </AnimatePresence>
      <Footer />  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
    </>
  );
}
