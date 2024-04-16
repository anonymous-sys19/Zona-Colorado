'use client'
import React from 'react'
import HomeApp from "../components/Home.jsx"
import HistoriaIDEC from "./QuienesSomos/page.jsx"
function Page() {
 
  return (
    <>
      <HomeApp RutaDisplay={<HistoriaIDEC />} />
      
    </>
  )
}

export default Page