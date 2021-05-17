import React from 'react'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { withRedux } from '../lib/redux'

import '../styles/globals.sass'

const CustomApp = (props) => {
  const { Component, pageProps, router } = props
  return (
    <>
      <PageTransition timeout={200} classNames="page-transition">
        <Component {...pageProps} key={router.route}/>
      </PageTransition>
    <style jsx global>
      {`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
      `}
    </style>
    </>
  )
}

export default withRedux(CustomApp)