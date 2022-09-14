import React from 'react';
import Head from "next/head";
import Header from './Header';

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
    </div>
  )
}

export default Layot