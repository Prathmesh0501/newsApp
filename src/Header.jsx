import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <div className='bg-gray-400'>
            <div className='container-sm'>
                <div className='flex justify-between py-3'>
                    <h1 className='text-5xl font-serif'>News-API</h1>
                    <ul className='flex space-x-10 text-2xl uppercase mt-1'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 ${isActive ? "text-white" : "text-grey-700"}`
                            }
                        >
                            Business
                        </NavLink>
                        <NavLink
                            to="science"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 ${isActive ? "text-white" : "text-grey-700"}`
                            }
                        >
                            Science & Technology
                        </NavLink>
                        <NavLink
                            to="sports"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0 ${isActive ? "text-white" : "text-grey-700"}`
                            }
                        >
                            Sports
                        </NavLink>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Header