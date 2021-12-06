/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { SWRConfig } from 'swr'
import NProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import { ToastProvider } from 'react-toast-notifications'
import { GlobalStyles } from 'twin.macro'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import * as gtag from '../lib/gtag'
import fetcher from '../lib/fetcher'
import 'react-image-crop/dist/ReactCrop.css'
import '../styles/global.scss'
import '../styles/slick.scss'
import '../styles/nprogress.scss'

NProgress.configure({
  showSpinner: false,
})

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <CacheProvider value={cache}>
        <GlobalStyles />
        <ToastProvider autoDismissTimeout={5000} placement="bottom-right">
          <Component {...pageProps} />
        </ToastProvider>
      </CacheProvider>
    </SWRConfig>
  )
}

export default MyApp
