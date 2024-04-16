'use client'
import React from 'react'

function Ministerios() {
    return (
        <div>
            <nav className="">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 float-right">
                    <div className="w-full md:block md:w-auto " id="">
                        <ul className="text-sm flex flex-col float-right p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            {[
                                { label: 'Ministereio del adulto mayor', href: '' },
                                { label: 'Ministereio de Caballeros', href: '' },
                                { label: 'Ministerio de Damas', href: '/' },
                                { label: 'GE Emergente', href: '/' },
                                { label: 'GE Junior', href: '/' },
                                { label: 'Iglesia Infantil', href: '/' },
                                { label: 'Ministerio Matrimonio y familia', href: '/' },
                                { label: 'Misiones', href: '/' },
                                { label: 'Plantacion de Iglesias', href: '/' },
                                { label: 'Capellania', href: '/' },
                                { label: 'La gran comisión', href: '/' },
                                { label: 'Formacion Integral', href: '/' },
                            ].map((menuItem, index) => (
                                <li key={index}>
                                    <a href={menuItem.href} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                        {menuItem.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Ministerios