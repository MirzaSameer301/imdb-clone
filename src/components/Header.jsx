import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex items-center justify-between p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
            <MenuItem title='home' address='/' Icon={AiFillHome}/>
            <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex gap-4 items-center">
        <DarkModeSwitch/>
        <Link href={'/'} className='flex items-center gap-1'>
        <span className='text-2xl bg-amber-500 py-1 px-2 rounded-lg font-bold hover:bg-amber-400'>IMBd</span>
        <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
    </div>
  )
}
