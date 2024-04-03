'use client'

import React from "react";
import NoteExample from "./notes/NoteExample";
import NoteExampleFade from "./notes/NoteExampleFade";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import UserOne from '@/public/user1.png'

export default function ContentContainerTwo() {
  return (
    <div className="flex mb-4 h-[400px] gap-4">
      <div className="w-1/6  h-12">
        <NoteExample />
          </div>
      <div className="w-1/6  h-12">
        <NoteExample />
      </div>
      <div className="w-1/6  h-12">
        <NoteExampleFade />
      </div>
      <div className="ml-20">
        <div className="text-black text-3xl">Onboarding has never been easier. </div>
        <div className="rounded-md text-black mb-20 text-xl font-light">
          Perfect for capturing intercompany processes, Pidge helps you onboard
          faster, keeping your employees confident with role specific
          documentation just a click away.
        </div>
        <div className="rounded-md text-black text-md text-violet-400">
          Get started for free <ArrowForwardIcon /> 
        </div>
      </div>
    </div>
  );
}
