/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import LogoBg from '../../../public/images/cruzAndLlama.png'
import BgZona from '../../../public/images/ZonaColorado.png'
import Image from 'next/image'
function HomePage() {
  return (
    <>
      <div className='bg-div-zona'>

        <div className="flex justify-between flex-row">
          <div className='block '>
            <div className='ml-48'>
              <Image priority src={BgZona} alt={''} />
            </div>
            <div className="mt-48 max-w-screen-md">
              <p className=' text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est sequi sit laborum aspernatur aut enim eum sint blanditiis nostrum.</p>
            </div>
          </div>



          <div className="absolute right-0">
            <Image
              priority
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
