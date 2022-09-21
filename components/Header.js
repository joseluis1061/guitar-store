import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>
      
          <Link href="/">
            <a>  
              <Image width={400} height={100} src="/img/logo.svg" alt="Imagen logo"/>
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/nosotros"><a>Nosotros</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/tienda"><a>Tienda</a></Link>
          </nav>
          </div>
       
      </div>

    </header>
  )
}

export default Header