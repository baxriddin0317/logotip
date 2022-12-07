import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'

const Navigation = () => {
    const [ openMenu, setOpenMenu ] = useState(true);
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
                                Soliq Sektori
                            </Link>
                        </li>
                        <li className='text-brand-gray-primary text-lg linkHover'>
                            <Link to={'/tibbiyot'}>
                                Tibbiyot Sektor
                            </Link>
                        </li>
                    </ul>
                </nav>

                {!openMenu && <button className='flex lg:hidden' onClick={setOpenMenu(true)}>
                    <AiOutlineMenu className='text-2xl text-brand-gray-primary' />
                </button>}
            </div>
        </div>
        {openMenu && <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />}
    </header>
  )
}

export default Navigation

const MobileMenu = ({openMenu, setOpenMenu}) => {
    return (
        <nav className={`${openMenu ? 'left-0' : '-left-full'}  lg:hidden w-full h-full fixed z-50 top-0 bg-black/90 py-5 px-7`}>
            <div className='flex justify-between items-center '>
                <div className='font-bold text-3xl text-brand-mainColor italic underline'>
                    <Link to={'/'}>
                        Logotip
                    </Link>
                </div>
                <button onClick={setOpenMenu(false)}>
                    close
                </button>
            </div>
            <ul className='flex flex-col items-center mt-20 gap-y-10 whitespace-nowrap text-white'>
                <li className='text-2xl linkHover'>
                    <Link to={'/hokim'}>
                        Hokim Sektori
                    </Link>
                </li>
                <li className='text-2xl linkHover'>
                    <Link to={'/prokror'}>
                        Prokror Sektori
                    </Link>
                </li>
                <li className='text-2xl linkHover'>
                    <Link to={'/viloyat'}>
                        Soliq Sektori
                    </Link>
                </li>
                <li className='text-2xl linkHover'>
                    <Link to={'/tibbiyot'}>
                        Tibbiyot Sektor
                    </Link>
                </li>
            </ul>
        </nav>
    )
}