import Link from 'next/link'
import React from 'react'

export default function MenuItem({title,address,Icon}) {
  return (
    <Link href={address} className='text-slate-700 hover:text-amber-500'>
    <Icon className='text-2xl sm:hidden'/>
    <p className=' uppercase hidden sm:inline text-xl'>{title}</p>
    </Link>
  )
}
