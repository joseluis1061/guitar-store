import React from 'react'
import Head from "next/head";

const Layot = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Guitar - {pagina}</title>
        <meta name="description" content="Web de venta de guitarras" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <p>Desde el Layot</p>
      {children}
    </div>
  )
}

export default Layot