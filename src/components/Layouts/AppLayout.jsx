import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

const AppLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <Navigation />

        <main>
            {children}
        </main>

        <Footer />
    </div>
  )
}

export default AppLayout