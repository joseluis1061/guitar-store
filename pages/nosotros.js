import React from 'react';
import Layot from "../components/Layot";
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
      <Layot pagina = {"Nosotros"}>
        <main className='contenedor'>
          <h2>Nosotros</h2>                    
          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />
            <div >
              <p>
                Los Angeles Guitar desea darle la bienvenida a nuestro sitio web. Con una ilustre historia que se remonta a 1946, hemos tocado y transformado la música en todo el mundo y en casi todos los géneros: rock and roll, country y western, jazz, rythm and blues y muchos otros. Todos, desde principiantes y aficionados hasta los artistas e intérpretes más aclamados del mundo, han utilizado nuestros instrumentos y amplificadores, lo que ha convertido a la compañía no solo en un nombre venerado en la industria de la música, sino también en un ícono cultural. Nuestra visión es continuar defendiendo EL ESPÍRITU DEL ROCK-N-ROLL® en todo el mundo y nuestra misión superar las expectativas de los entusiastas de la música en todo el mundo.
              </p>
              <p>
                Leo Fender quería crear un instrumento que fuera tan funcional como fácil de usar. Era un objeto de aspecto primitivo que era duro como un clavo, su poderoso nombre inspirado en otro invento innovador: la televisión. Y con su revolucionario tono electrificado, cambiaría la forma en que se hacía música, para siempre. Cuando alguien pregunta: "¿Por qué los eléctricos Fender?" la respuesta es clara Las guitarras Fender fueron diseñadas para ser más fuertes, y los tonos emocionantes que producían todavía están arraigados en nuestro ADN cultural.
              </p>
            </div>
          </div>
        </main>
    </Layot>
  );
};

export default Nosotros;
