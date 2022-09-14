import React from "react";
import Layot from "../components/Layot";
import Link from "next/link";

const Nosotros = () => {
  return (
    <div>
      <Layot pagina = {"Nosotros"}>
        <h1>Desde nosotros</h1>
      </Layot>

      <Link href="/">Inicio</Link>
    </div>
  );
};

export default Nosotros;
