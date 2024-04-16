'use client'
import React from 'react'
import HomeApp from '../../components/Home'
import HistoriaIDEC from "./HomeQuienesSomos"
function Page() {
 
  return (
    <>
      <HomeApp RutaDisplay={<HistoriaIDEC />} />
      
    </>
  )
}

export default Page