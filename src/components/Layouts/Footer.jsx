import React from 'react'
import {Link} from "react-router-dom"
import {footerData} from "../../Assets/Data/Footer"

import Paypal from "../../Assets/Image/PayPal.png"
import Visa from "../../Assets/Image/Visa.jpg"
import Maestro from "../../Assets/Image/Maestro.png"
import AmericanExpress from "../../Assets/Image/AmericanExpress.png"

const Footer = () => {
  return (
    <footer className='bg-footer-img py-16'>
      <div className="container mx-auto px-7">
        <div className='flex items-start text-white mb-36'>
          {footerData.map((item) => (
            <ul className={`${item.title === 'categories' ? 'flex-1': ""}`}>
              <li className='mb-5'>
                <h2 className='text-brand-orange-primary text-xl capitalize'>
                  {item.title}
                </h2>
              </li>
              <li className='flex flex-col flex-wrap h-[370px]'>
                {item.data.map((item) => (
                  <Link className='mr-36 mb-2 hover:text-black capitalize' key={item.name} href={item.href} legacyBehavior>
                      {item.name}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>

        <div className='flex justify-between items-end'>
          <div className='font-bold text-3xl text-white italic underline'>
              <Link to={'/'}>
                  Logotip
              </Link>
          </div>

          <div className='flex gap-1'>
            <Link href={'#'}>
              <img className='' src={Paypal} alt="" />
            </Link>
            <Link href={'#'}>
              <img className='' src={Visa} alt="" />
            </Link>
            <Link href={'#'}>
              <img className='' src={Maestro} alt="" />
            </Link>
            <Link href={'#'}>
              <img className='' src={AmericanExpress} alt="" />
            </Link>
          </div>

          <div>
            <p className='text-white text-xs'>
              Privacy Policy. Terms of Service. Website by code23
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;