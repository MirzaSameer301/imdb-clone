'use client';
import React from 'react'
import { useEffect } from 'react';

export default function error({error,reset}) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='text-center mt-20'>
        <h2>Something went wrong! Please Try again later</h2>
        <button onClick={()=>reset()} className='bg-green-600 rounded-sm p-1 mt-5 hover:bg-green-700'>Try Again</button>
    </div>
  )
}
