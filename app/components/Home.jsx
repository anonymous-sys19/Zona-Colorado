/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { InputComponentSearch } from "./SearchIcon.jsx";
import HomePage from "./Home/HomePage.jsx";
import { useState } from 'react';

// const Dropdown = ({ options }) => {
//     return (
//         <ul className="relative bg-gray-800 text-white p-2 rounded-md shadow-lg">
//             {options.map((option, index) => (
//                 <li key={index}>
//                     <Link href={option.route} className="block py-2 px-4 hover:bg-gray-700">
//                         {option.title}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// };

const HomeApp = ({ RutaDisplay }) => {
    const [open, setOpen] = useState(true);
    // const [showMinistries, setShowMinistries] = useState(false);

    // const MinistriesOptions = [
    //     { title: "Ministerio de Mujeres", route: "/ministerio-mujeres" },
    //     { title: "Ministerio de Caballeros", route: "/ministerio-caballeros" },
    // ];

    const Menus = [
        { input: "Input", src: "Search", ruta: "buscar Resultado" },
        { title: "Biblia", src: "Biblia", gap: true, ruta: "Biblia" },
        { title: "Ministerios", src: "Ministerios", ruta: "Ministerios" }, //dropdown: true
        { title: "Quienes Somos ", src: "QuienesSomos", ruta: "QuienesSomos" },
        { title: "Oficina Virtual", src: "OficinaVirtual", ruta: "OficinaVirtual" },
        { title: "Contactar", src: "Contactar", ruta: "Contactar" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "} bg-light-white h-screen p-5  pt-8 relative duration-300 z-10`}
            >
                <img
                    src="/images/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-1 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        width={36}
                        height={36}
                        src="/images/1.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
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
                                    <img src={`/images/assets/${Menu.src}.gif`} alt="" width={24} />
                                    <InputComponentSearch placeholder={Menu.src} clasName={`${!open && "hidden"} origin-left duration-200`} />
                                </>
                            ) : (
                                <>
                                    <div className="relative flex">
                                        <div className=''>
                                            {/* <video src={`/images/assets/${Menu.src}.gif`} width={24}></video> */}
                                            <img src={`/images/assets/${Menu.src}.gif` || `/images/assets/${Menu.src}.png`} width={24} />
                                        </div>
                                        <div>
                                            <Link
                                                href={`/pages/${Menu.ruta}`} //Menu.ruta === "Ministerios" ? `/pages/${Menu.ruta}` || "#" :
                                                className={`${!open && "hidden"} origin-left duration-200 mt-0 mr-0 mb-0 ml-4`}
                                                // onClick={(e) => {
                                                //     if (Menu.ruta === "Ministerios") {
                                                //         e.preventDefault();
                                                //         setShowMinistries(!showMinistries);
                                                //     }
                                                // }}
                                            >
                                                {Menu.title}
                                            </Link>
                                            {/* {Menu.dropdown && showMinistries && <Dropdown options={MinistriesOptions} />} */}
                                        </div>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1">
                <article className="text-2xl font-semibold ">{RutaDisplay ? (RutaDisplay) : (<HomePage />)}</article>
            </div>
        </div>
    );
};

export default HomeApp;