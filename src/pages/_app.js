import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'
import { ThemeContext, Themes } from '@/Context/ThemeContext'

const montserrat = Montserrat({ subsets: ['latin'],variable: "--font-mont", })

export default function App({ Component, pageProps }) {
  const rout = useRouter();

  const [theme,setTheme] = useState(Themes.light);

  function change () {
      let th = theme;
      if(th == Themes.light){
        setTheme(Themes.dark);
      }else{
        setTheme(Themes.light);
      }
      
  }

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeContext.Provider value={{theme}}>
      <main className={`${montserrat.variable} ${theme.background} font-mont w-full main-h-screen`}>
          <Navbar changeTheme={change} />
          <AnimatePresence mode='wait'>
          <Component key={rout.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
      </main>
      </ThemeContext.Provider>

    </>
  )
}
