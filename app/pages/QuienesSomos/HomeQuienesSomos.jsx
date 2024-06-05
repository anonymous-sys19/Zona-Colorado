'use client'
import HomeMenuLinks from "../../components/HomesLinks/HomeMenuLinks";
function HistoriaIDEC() {
  function HandleClick ()  {
    console.log('{"Mision y Vision} {Principios Doctrinales} {Estructura } Se encuentran en Desarrollo');
  };


  return (
    <>
      <HomeMenuLinks
        item1={"Home"} ref1={'/'}
        item2={"Conexion 20/30"} ref2={"QuienesSomos/conexion20-30"}
        item3={"Mision y Vision"} ref3={"#"}
        item4={"Declaracion de fe"} ref4={"QuienesSomos/declaracion-de-fe"}
        item5={"Principios Doctrinales"} ref5={"#"}
        item6={"Principios Practicos"} ref6={"QuienesSomos/principiosPracticos"}
        item7={"Estructura"} ref7={HandleClick()}
      />

    </>
  )
}



export default HistoriaIDEC;

