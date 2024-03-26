'use client'

import React from "react"
import Image from 'next/image'
import Notes from '@/public/Notes.jpg'

export default function ContentContainerOne() {
  return (
    <div className="grid grid-rows-3 grid-cols-2 grid-flow-col gap-10 h-[500px] auto-cols-max">
      <div className="col-span-1 col-start-1 text-3xl mt-20">
        Create document flows, without ever having to leave your browser.
      </div>
      <div className="col-span-1 col-start-1 text-xl mt-4 font-light text-slate-600">
        Create and access documentation within your browser of choice, or on the
        page your working within... You never have to leave again.
      </div>
      <div className="col-span-1 col-start-1 text-lg text-indigo-500">Get started for free</div>
     
      <Image
      src={Notes}
      alt="Picture of Pidge Web Application Dashboard"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      style={{
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        
      }}
    />
      </div>

  );
}
