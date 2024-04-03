import React from "react";
import Image from 'next/image';
import Notes from '@/public/notes.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function ContentContainerOne() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2">
      <div className="col-start-1 row-span-3 spacing-2">
      <div className="text-xl md:text-3xl pt-6 md:pt-20 text-center md:text-left text-black col-start-1 mb-6">
        Create document flows, without ever having to leave your browser.
      </div>
      <div className="text-sm md:text-xl font-light text-center md:text-left text-slate-600 flex justify-center md:justify-start col-start-1 row-start-2 mb-20">
        Create and access documentation within your browser of choice, or on the page you're working within... You never have to leave again.
      </div>
      <div className="flex justify-center md:justify-start text-lg text-violet-400 row-start-3">
        Get started for free <ArrowForwardIcon />
      </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={Notes}
          alt="Picture of Pidge Web Application Dashboard"
          layout="responsive"
          width={720}
          height={495}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
