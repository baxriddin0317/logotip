import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai"
import { RiHospitalLine } from "react-icons/ri"
import { GiHospitalCross } from "react-icons/gi"
import { FaHospitalUser, FaHospitalAlt, FaHospitalSymbol } from "react-icons/fa"
import { Link } from 'react-router-dom'

const sidebarInfo = [
    {
        id: 0,
        name: "home",
        icon: <AiFillHome />,
        link: ''
    },
    {
        id: 1,
        name: "Markaziy shifoxona",
        icon: <RiHospitalLine />,
        link: 'shifoxona'
    },
    {
        id: 2,
        name: "Polikilinika",
        icon: <GiHospitalCross />,
        link: 'poliklinika'
    },
    {
        id: 3,
        name: "TTYo",
        icon: <FaHospitalSymbol />,
        link: 'ttyo'
    },
    {
        id: 4,
        name: "KVP",
        icon: <FaHospitalUser />,
        link: 'kvp'
    },
    {
        id: 5,
        name: "Tug'riqxona",
        icon: <FaHospitalAlt />,
        link: 'tugriqxona'
    },
]

const Sidebar = () => {

    const [ isActive, setIsActive ] = useState(0);

  return (
    <div className='w-full h-[80px] md:h-full overflow-hidden lg:w-full md:py-11 md:px-2 bg-white rounded-2.5xl shadow-card border border-brand-gray-medium/10'>
      <ul className='flex md:flex-col justify-around'>
        {
            sidebarInfo.map(item => (
                <Link key={item.id} to={item.link} onClick={() => setIsActive(item.id)}>
                    <li  
                        className={`${isActive === item.id ? 'activeItem' : 'text-brand-gray-primary'} sidebarLink`}
                    >
                        {item.icon}
                        <span className='ml-2 hidden lg:flex text-base xl:text-lg'>
                            {item.name}
                        </span>
                    </li>
                </Link>
            ))
        }
      </ul>
    </div>
  )
}

export default Sidebar
