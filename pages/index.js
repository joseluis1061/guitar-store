import Link from 'next/link';
import Layot from '../components/Layot';

export default function Home() {
  return (
    <div>
      <Layot pagina = {"Inicio"}>
        <h1>Desde el inicio</h1>
      </Layot>
      <Link href="/nosotros">Nosotros</Link>
    </div>
  )
}
