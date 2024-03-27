'use client'

import React from "react"
import Image from 'next/image'
import Notes from '@/public/notes.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function ContentContainerOne() {
  return (
    <div className="grid grid-rows-3 grid-cols-2 grid-flow-col">
      <div className="col-start-1 text-3xl pt-20 text-black">
        Create document flows, without ever having to leave your browser.
      </div>
      <div className="col-start-1 text-xl font-light text-slate-600 h-24">
        Create and access documentation within your browser of choice, or on the
        page your working within... You never have to leave again.
      </div>
      <div className="col-start-1 row-start-3 text-lg text-violet-400">
        Get started for free <ArrowForwardIcon /> 
      </div>
      <div className="flex justify-center col-start-2 row-span-3">
        <Image
          width={720}
          height={495}
          src={Notes}
          alt="Picture of Pidge Web Application Dashboard"
          style={{
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'

          }}
        />
      </div>
    </div>

  );
}
