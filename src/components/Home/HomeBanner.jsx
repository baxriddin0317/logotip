import React from 'react'

const HomeBanner = () => {
  return (
    <div className='py-28'>
        <div className='container mx-auto px-7'>
            <div className='flex items-center flex-col-reverse md:flex-row gap-20 justify-between'>
                <div className='md:w-[450px]'>
                    <h2 className='font-bold text-5xl mb-6'>
                        Virtual healthcare 
                        for you
                    </h2>
                    <p className='text-xl text-brand-gray-medium mb-14'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio natus maiores fuga neque repellendus molestias ut cum perspiciatis vitae.
                    </p>
                    <a className='btn' href="/">
                        Consult today
                    </a>
                </div>
                <div>
                    <img src={require('../../Assets/Image/jumImg.png')} alt="jumbotron" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner
