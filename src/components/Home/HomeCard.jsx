import React from 'react'
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

const HomeCard = () => {
  return (
    <section className='py-10 pb-5'>
        <div className="container mx-auto px-7">
            <div className='text-center w-11/12 mx-auto mb-20'>
                <h3 className='text-4xl font-bold mb-16'>
                Our services
                </h3>
                <p className='text-lg text-brand-gray-medium'>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
                </p>
            </div>

            <div className="grid grid-cols-4 gap-10">
                <div className='pl-10 p-11 bg-white rounded-2.5xl shadow-card'>
                    <img className='mb-5 h-24 ' src={require('../../Assets/Image/sektor1.png')} alt="" />
                    <h2 className='font-bold capitalize text-2xl mb-1'>
                        Hokim sektori
                    </h2>
                    <p className='text-brand-gray-medium font-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className='mt-4 flex justify-between'>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTelegramPlane className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaInstagram className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaFacebookF className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTwitter className='text-xl text-white' />
                        </div>
                    </div>
                </div>
                <div className='pl-10 p-11 bg-white rounded-2.5xl shadow-card'>
                    <img className='mb-5 h-24 ' src={require('../../Assets/Image/sektor2.png')} alt="" />
                    <h2 className='font-bold capitalize text-2xl mb-1'>
                        prokror sektori
                    </h2>
                    <p className='text-brand-gray-medium font-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className='mt-4 flex justify-between'>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTelegramPlane className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaInstagram className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaFacebookF className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTwitter className='text-xl text-white' />
                        </div>
                    </div>
                </div>
                <div className='pl-10 p-11 bg-white rounded-2.5xl shadow-card'>
                    <img className='mb-5 h-24 ' src={require('../../Assets/Image/tib.png')} alt="" />
                    <h2 className='font-bold capitalize text-2xl mb-1'>
                        meditsina
                    </h2>
                    <p className='text-brand-gray-medium font-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className='mt-4 flex justify-between'>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTelegramPlane className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaInstagram className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaFacebookF className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTwitter className='text-xl text-white' />
                        </div>
                    </div>
                </div>
                <div className='pl-10 p-11 bg-white rounded-2.5xl shadow-card'>
                    <img className='mb-5 h-24' src={require('../../Assets/Image/sektor1.png')} alt="" />
                    <h2 className='font-bold capitalize text-2xl mb-1'>
                        tibbiyot sektori
                    </h2>
                    <p className='text-brand-gray-medium font-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <div className='mt-4 flex justify-between'>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTelegramPlane className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaInstagram className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaFacebookF className='text-xl text-white' />
                        </div>
                        <div className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full shadow-2xl bg-brand-mainColor'>
                            <FaTwitter className='text-xl text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeCard
