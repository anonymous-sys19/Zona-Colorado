'use client'
import HomeMenuLinks from "../../../components/HomesLinks/HomeMenuLinks"
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '/public/css/historia.css'
import '/public/css/style.css'
function PrincipiosPracticos() {

    const [data, setData] = useState(null)
    useEffect(() => {
        //:TODO: cARGAMOS EL jSON
        fetch('/json/PrincipiosPracticos.json')
            // .then(response => response.json())
            // .then(jsonData => setData(jsonData))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching the JSON:', error));
    }, [])
    return (
        <>
            <HomeMenuLinks
                item1={"Inicio"} ref1={"/"}
            />


            <article className="flex justify-center p-4">
                <div className="container cont1">
                    {/* Verificar si data es null antes de mapearlo */}
                    {data && data.secciones.map((seccion, index) => (
                        <div key={index} className='container'>
                            <div className="container title">
                                <h1>{seccion.id}. {seccion.titulo}</h1>
                            </div>

                            <div className="container cont-historia">
                                <div className="container cont-txt">
                                    <p>{seccion.description}</p>
                                    {
                                        seccion.contenido.map((contenido, subIndex) => (
                                            <div key={subIndex}>
                                                <h2>{contenido.subtitulo}</h2>
                                                <p className="">{contenido.texto}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </article >


        </>
    )
}

export default PrincipiosPracticos;


