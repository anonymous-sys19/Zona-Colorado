/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState, useRef } from 'react'
import LogoBg from '../../../public/images/cruzAndLlama.png'
import BgZona from '../../../public/images/ZonaColorado.png'
import Image from 'next/image'
import { MdDownloadForOffline } from "react-icons/md";
import html2canvas from 'html2canvas'
import { Helmet } from 'react-helmet'
function HomePage() {
  // const [currentVerseText, setCurrentVerseText] = useState('');
  const [currentImagePath, setCurrentImagePath] = useState('');
  useEffect(() => {
    // Agrega el script al DOM
    const script = document.createElement('script');
    script.src = 'https://dailyverses.net/get/verse.js?language=nvi';
    script.async = true;
    script.defer = true;
    document.getElementById('dailyVersesWrapper').appendChild(script);
    // Obtén las rutas de las imágenes desde tu JSON (suponiendo que es un objeto con una propiedad "imagePaths")
    const jsonImagePath = "/json/imagespathstoDownload.json"; //""; //  https://random.imagecdn.app/1200/650 Reemplaza con la ruta correcta de tu JSON
    fetch(jsonImagePath)
      .then(response => response.json())
      .then(data => {
        const imagePaths = data.imagePaths || [];
        // Cambiar la imagen de fondo de forma aleatoria
        const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
        setCurrentImagePath(randomImagePath);
      })
      .catch(error => console.error('Error fetching image paths:', error));
    // Limpia el script al desmontar el componente
    // return () => {
    //     document.getElementById('dailyVersesWrapper').removeChild(script);
    // };
  }, [])
  const dailyVersesRef = useRef(null);
  const captureAndDownloadImage = async () => {
    const canvas = await html2canvas(dailyVersesRef.current);
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'dailyVerses.png';
    link.click();
  };
  const dailyVerseStyle = {
    backgroundImage: `url(${currentImagePath})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontWeight: 700,
  };
  return (
    <>
      <div className='bg-div-transparenci'>

        <div className="flex justify-between flex-row">
          <div className='block'>
            <div className='ml-48 mr-4'>
              <Image priority src={BgZona} alt={'Image'} width={0} height={0} className='' />
            </div>
            <div className="mt-16 max-w-screen-md flex justify-center" >
              <div className='ml-8p mr-8p flex h-60 items-center justify-center w-auto text-white font-bold py-2  rounded opacity-90 cursor-not-allowed relative z-10 text-base' ref={dailyVersesRef} style={dailyVerseStyle}>
                <div className='bgPasage flex h-60 items-end justify-center w-auto text-white font-bold rounded cursor-not-allowed relative text-base'>
                <p className='w-auto text-center text-white p-4' id='dailyVersesWrapper'></p>
                </div>

              </div>
            </div>
            <button style={
              { 
                background: '#ffffff',
                color: '#1cb389',
                border: 'none',
                borderRadius: '100px',
                fontSize: '2.3rem',
                padding: 0,
                display: 'flex',
                float: 'right',
                position: 'relative',
                zIndex: 22,
              }
            } onClick={captureAndDownloadImage}> < MdDownloadForOffline /> </button>
            <Helmet>
              <script async defer src="https://dailyverses.net/get/verse.js?language=nvi"></script>
            </Helmet>
          </div>



          <div className="absolute right-0 ml-5">
            <Image
              priority
              width={0}
              height={0}
              src={LogoBg}
              alt="Follow us on BG idec"
              className='w-auto'
              style={{
                height: "100vh",
              }}
            />
          </div>

        </div>






      </div>
    </>
  )
}

export default HomePage
