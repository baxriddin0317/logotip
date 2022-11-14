import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='py-28 bg-footer-img text-white'>
        <div className="container mx-auto px-7">
          <div className='flex gap-36'>
            <div className='w-96'>
              <div className='font-bold text-3xl text-white italic underline mb-4'>
                  <Link to={'/'}>
                      Logotip
                  </Link>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto voluptates fugit quam? Dolor hic officia possimus aut voluptatum itaque! Fugiat.
              </p>

            </div>
          </div>
        </div>
    </footer>
  )
}
