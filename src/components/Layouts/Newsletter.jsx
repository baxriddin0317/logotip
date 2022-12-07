import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-brand-mainColor py-10'>
        <div className="container mx-auto px-7">
            <div className='grid grid-cols-2 gap-64 items-center'>
                <h2 className='text-white text-2xl text-bold'>
                Sign up for newsletter, for first access to latest news, offers, new products and inspiration. 
                </h2>
                <form className='bg-white rounded-lg border border-brand-gray-light p-1 w-full flex justify-between'>
                    <input className='w-full outline-none pl-5 text-brand-blue-primary' type="text" placeholder='Your email address' />
                    <button className='bg-brand-mainColor border-none text-white rounded-lg py-4 px-7'>
                        Submit
                    </button>
                </form>
            </div>  
        </div>
    </section>
  )
}

export default Newsletter
