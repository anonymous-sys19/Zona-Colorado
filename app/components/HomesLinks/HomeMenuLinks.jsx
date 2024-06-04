/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react";
function HomeMenuLinks({
    item1, item2, item3, item4, item5, item6, item7,
    ref1, ref2, ref3, ref4, ref5, ref6, ref7
}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
         {/* dark:bg-gray-900 */}

            <nav className="navbg bg-white relative w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/1.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zona Colorado</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:text-gray-600  dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={menuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 mt-11 ml-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  "> {/* md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 bg-gray-50 */}
                            <li>
                                <a href={ref1} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">{item1}</a>
                            </li>
                            <li>
                                <a href={ref2} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item2}</a>
                            </li>
                            <li>
                                <a href={ref3} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item3}</a>
                            </li>
                            <li>
                                <a href={ref4} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item4}</a>
                            </li>
                            <li>
                                <a href={ref5} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item5}</a>
                            </li>
                            <li>
                                <a href={ref6} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item6}</a>
                            </li>
                            <li>
                                <a href={ref7} className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{item7}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default HomeMenuLinks;
