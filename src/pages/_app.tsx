import React from 'react'
import { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { GlobalProvider } from '../contexts/globalContext'
import { SearchProvider } from '../contexts/searchContext'
import ThemeWrapper from '../components/templates/ThemeWrapper'
import Script from 'next/script'
import { HelmetProvider } from 'react-helmet-async'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <HelmetProvider>
        <ThemeWrapper>
          <NextNProgress color="#FEC063" />
          <SearchProvider>
            <>
              <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />

              <Script strategy="lazyOnload" id="google-script">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                      });
                  `}
              </Script>
              <main>
                <Component {...pageProps} />
              </main>
            </>
          </SearchProvider>
        </ThemeWrapper>
      </HelmetProvider>
    </GlobalProvider>
  )
}

export default MyApp
