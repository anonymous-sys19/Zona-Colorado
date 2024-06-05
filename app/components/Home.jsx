/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { InputComponentSearch } from "./SearchIcon.jsx";
import HomePage from "./Home/HomePage.jsx";
import { useState } from 'react';
import Image from 'next/image.js';



const HomeApp = ({ RutaDisplay }) => {
    const [open, setOpen] = useState(true);


    const Menus = [
        { input: "Input", src: "Search", ruta: "buscar Resultado" },
        { title: "Biblia", src: "Biblia", gap: true, ruta: "Biblia" },
        { title: "Ministerios", src: "Ministerios", ruta: "Ministerios" }, //dropdown: true
        { title: "Quienes Somos ", src: "QuienesSomos", ruta: "QuienesSomos" },
        { title: "Oficina Virtual", src: "OficinaVirtual", ruta: "OficinaVirtual" },
        { title: "Contactar", src: "Contactar", ruta: "Contactar" },
    ];

    return (
        <div className="flex flex-wrap md:flex-wrap  bg-div-zona md:bg-div-zona">
            <div
                className={` ${open ? "w-72" : "w-20 "} bg-light-white h-screen p-5  pt-8 relative duration-300 z-10 shadow-custom`}
            >
                <Image
                    src="/images/assets/control.png"
                    alt='Image to control'
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-1 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                    width={24}
                    height={24}
                    loading='lazy'
                    
                />
                <div className="flex gap-x-4 items-center">
                    <Image
                        width={50}
                        height={50}
                        src="/images/1.png"
                        alt='Image 1.png'
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        priority
                    />
                    <h1 className={`text-blue-950 origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>Z Colorado</h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer text-blue-900 hover:bg-blue-200 hover:text-black text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-blue-white"}`}
                        >
                            {Menu.input ? (
                                <>
                                    <Image src={`/images/assets/${Menu.src}.gif`} alt="Image othrer" width={24} height={24}  loading='lazy' />
                                    <InputComponentSearch placeholder={Menu.src} clasName={`${!open && "hidden"} origin-left duration-200`} />
                                </>
                            ) : (
                                <>
                                    <div className="relative flex">
                                        <div className=''>
                                            {/* <video src={`/images/assets/${Menu.src}.gif`} width={24}></video> */}
                                            <Image src={`/images/assets/${Menu.src}.gif` || `/images/assets/${Menu.src}.png`} alt='Image' width={24} height={24} loading='lazy' />
                                        </div>
                                        <div>
                                            <Link
                                                href={`/pages/${Menu.ruta}`} //Menu.ruta === "Ministerios" ? `/pages/${Menu.ruta}` || "#" :
                                                className={`${!open && "hidden"} origin-left duration-200 mt-0 mr-0 mb-0 ml-4`}
                                            
                                            >
                                                {Menu.title}
                                            </Link>
                                           
                                        </div>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1">
                <article className="text-2xl font-semibold bg-div-zona">{RutaDisplay ? (RutaDisplay) : (<HomePage />)}</article>
            </div>
        </div>
    );
};

export default HomeApp;