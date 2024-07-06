'use client';
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function NavbarItems({title,param}) {
    const searchParams=useSearchParams();
    const genre=searchParams.get('genre');
  return (
    <Link className={`hover:text-amber-500 font-semibold ${genre===param ? 'underline underline-offset-8 decoration-amber-500 decoration-4':''}`} href={`/?genre=${param}`}>{title}</Link>
  )
}
