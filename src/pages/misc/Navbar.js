import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
            <div className=" justify-between items-center w-full md:flex md:w-auto">
                <ul className="flex flex-row p-4 mt-4 bg-white-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 xl:text-base lg:text-md md:text-xs2 md:font-light md:bg-white  ">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700">Unaivan</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700">Project</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700">Play</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
