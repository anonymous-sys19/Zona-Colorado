'use client'
import React from 'react'
import HomeMenuLinks from '../../../components/HomesLinks/HomeMenuLinks'
import Conexion2030 from "./Components/conexion2030"
import "bootstrap/dist/css/bootstrap.min.css";

function Connex2030() {
  return (
    <article className=''>
      <HomeMenuLinks
        item1={"Home"} ref1={"/"}
        item2={"Ministerios"} ref2={"/pages/Ministerios"}
        item3={"Oficina Movil"} ref3={"/pages/Ofinia-Movil"}
        item4={"Quienes somos"} ref4={"/pages/QuienesSomos"}
      />

      <Conexion2030 />
    </article>
  )
}

export default Connex2030;
