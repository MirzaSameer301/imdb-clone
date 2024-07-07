import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className='bg-amber-100 dark:bg-gray-600 justify-center p-4 flex gap-6 lg:text-lg' >
        <NavbarItems title='Trending' param='fetchTrending'/>
        <NavbarItems title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
