import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

import { useRouter } from 'next/router'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    }
  })
}


export default function App({ Component, pageProps }) {
  const router = useRouter()

    useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <PostHogProvider>

        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Genuine Jesse</title>
        </Head>

        {/* <GoogleAnalytics measurementId='G-SZES6HZZJM'/> */}

        <Navbar />
        <AnimatePresence mode="wait" initial={false}>

            <Component {...pageProps} />

        </AnimatePresence>
        <Footer />  

      </PostHogProvider>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>



    </>
  );
}
