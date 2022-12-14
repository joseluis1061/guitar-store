import React from 'react';
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
const Layot = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Guitar - {pagina}</title>
        <meta name="description" content="Web de venta de guitarras" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header/>
      {children}
      <Footer/>
      
    </div>
  )
}

export default Layot;