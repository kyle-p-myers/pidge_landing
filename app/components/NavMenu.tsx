import * as React from 'react';
import Button from '@mui/material/Button';
import { Montserrat } from 'next/font/google';
import Pidge from '@/public/pidge.png';
import Image from 'next/image';

const mont = Montserrat({ subsets: ["latin"] });

export default function NavMenu() {
  return (

    <div className='grid grid-cols-11 grid-rows-1 pt-10'>
      <div className='flex col-start-1 text-black justify-center place-items-end gap-3 text-3xl font-semibold'>
        <Image 
          width={40}
          height={50}
          src={Pidge}
          alt="Picture of Pidge Web Application Dashboard"
          style={{
            border: 'none',
          }}
        /> Pidge
        </div>
        <Button className={`col-start-3 w-32 ${mont.className}`}>Product</Button>
        <Button className={`w-32 ${mont.className}`}>Features</Button>
        <Button className={`w-32 ${mont.className}`}>Pricing</Button>
        <Button className={`w-32 ${mont.className}`}>Resources</Button>
        <Button className={`col-start-10 w-32 bg-gradient-to-b from-violet-300 to-purple-500 text-white ${mont.className}`}>Try it out</Button>
        <Button className={`w-32 border-solid border-2 border-violet-300 text-black ${mont.className}`}>Login</Button>
    </div>
  )
}
