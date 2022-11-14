import React from 'react'
import ShowDate from './ShowDate'
import Sidebar from './Sidebar'

const MedicPage = () => {
  return (
    <>
      <div className='container mx-auto px-7 py-20'>
        <div className='flex flex-col md:flex-row gap-8'>
          <Sidebar />
          <div className='w-full md:min-w-[80%]'>
            <ShowDate />
          </div>
        </div>
      </div>
    </>
  )
}

export default MedicPage