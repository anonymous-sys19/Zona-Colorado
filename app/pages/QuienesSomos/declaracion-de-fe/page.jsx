/* eslint-disable react/jsx-key */
'use client'

import '/public/css/declafe.css'




import ContentDecla from "./Content"
import HomeMenuLinks from '../../../components/HomesLinks/HomeMenuLinks';

function DeclaracionDFe() {
   


    return (
        <>
            <HomeMenuLinks
                item1={"Home"} ref1={"/"}
                item2={"Ministerios"} ref2={"/pages/Ministerios"}
                item3={"Oficina Movil"} ref3={"/pages/Oficina-movil"}
                item4={"Quienes Somos"} ref4={"/pages/QuienesSomos"}
            />

            <ContentDecla />
            
        </>

    )
}

export default DeclaracionDFe