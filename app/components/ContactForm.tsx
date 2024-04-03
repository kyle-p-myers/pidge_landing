'use client'

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function ContactForm() {

  return (
    <>
      <div className='flex-col'>
        <div className='text-center text-black text-6xl font-medium mb-10'>Document faster. Learn Faster. </div>
        <div className='text-center text-xl text-black mb-20'> We’re here to help, try Pidge Pro on us!</div>
      </div>
      <div className='grid grid-cols-6 gap-12 mb-20'>
        <TextField className='col-start-3 col-span-2' label="Email Address" />
        <Button className='self-center w-40 col-start-5 bg-gradient-to-r from-[#bf52cc] to-[#9A72D6] text-white'>
          Try for free
        </Button>
      </div>
    </>
  )
}
