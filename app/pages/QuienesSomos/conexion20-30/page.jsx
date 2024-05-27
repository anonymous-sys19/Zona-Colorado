import React from 'react'
import HomeMenuLinks from '../../../components/HomesLinks/HomeMenuLinks'

function Connex2030() {
  return (
    <>
      <HomeMenuLinks
        item1={"Home"} ref1={"/"}
        item2={"Ministerios"} ref2={"/pages/Ministerios"}
        item3={"Oficina Movil"} ref3={"/pages/Ofinia-Movil"}
        item4={"Quienes somos"} ref4={"/pages/QuienesSomos"}
      />
    </>
  )
}

export default Connex2030
