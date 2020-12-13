import '../styles/index.css'
import Head from 'next/head'
import { darken } from 'polished'
import React from 'react'
import { useRouter } from 'next/router'
import { pageview } from '../utils/gtag'
import { Header } from '../components/components/Header/Header'
import { Footer } from '../components/components/Footer/Footer'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  React.useEffect(() => {
    router.events.on('routeChangeComplete', pageview)

    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>{`Home | ${process.env.TITLE}`}</title>
        <style>
          {`
            :root {
              --primary-color-200: ${darken(-0.3, process.env.PRIMARY_COLOR)};
              --primary-color-100: ${darken(-0.4, process.env.PRIMARY_COLOR)};
              --primary-color-300: ${darken(-0.2, process.env.PRIMARY_COLOR)};
              --primary-color-400: ${darken(-0.1, process.env.PRIMARY_COLOR)};
              --primary-color-500: ${darken(0, process.env.PRIMARY_COLOR)};
              --primary-color-600: ${darken(0.1, process.env.PRIMARY_COLOR)};
              --primary-color-700: ${darken(0.2, process.env.PRIMARY_COLOR)};
              --primary-color-800: ${darken(0.3, process.env.PRIMARY_COLOR)};
              --primary-color-900: ${darken(0.4, process.env.PRIMARY_COLOR)};
            }
          `}
        </style>
        {(process.env.NO_INDEX || pageProps?.site?.isNoIndex) && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Header {...pageProps} />
      <div className="container mx-auto py-5 px-5">
        <Component {...pageProps} />
      </div>
      <Footer {...pageProps} />
    </>
  )
}

export default App
