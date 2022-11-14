import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"

const Navigation = () => {
  return (
    <header className='py-5'>
        <div className='container mx-auto px-7'>
            <div className='flex justify-between items-center'>
                <div className='font-bold text-3xl text-brand-mainColor italic underline'>
                    <Link to={'/'}>
                        Logotip
                    </Link>
                </div>

                <nav>
                    <ul className='hidden lg:flex items-center whitespace-nowrap'>
                        <li className='text-brand-gray-primary text-lg linkHover'>
                            <Link to={'/hokim'}>
                               Hokim Sektori
                            </Link>
                        </li>
                        <li className='text-brand-gray-primary text-lg linkHover'>
                            <Link to={'/prokror'}>
                                Prokror Sektori
                            </Link>
                        </li>
                        <li className='text-brand-gray-primary text-lg linkHover'>
                            <Link to={'/viloyat'}>
                                Viloyat Sektori
                            </Link>
                        </li>
                        <li className='text-brand-gray-primary text-lg linkHover'>
                            <Link to={'/tibbiyot'}>
                                Tibbiyot Sektor
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className='flex lg:hidden'>
                    <AiOutlineMenu className='text-2xl text-brand-gray-primary' />
                </button>
            </div>
        </div>
    </header>
  )
}

export default Navigation