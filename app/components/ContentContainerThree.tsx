import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import Android from '@/public/android.png'
import Apple from '@/public/apple.png'
import Chrome from '@/public/chrome.png'
import Windows from '@/public/windows.png'
import Brain from '@/public/brain.png'
import Urlshot from '@/public/urlShot.png'

export default function ContentContainerThree() {
  return (
    <div className='flex mb-24 h-[400px] gap-4'>
      <div className='w-1/2'>
        <div className='text-3xl text-black'>AI tracking allows Pidge to find where your working, and what your working on.</div>
        <div className='text-xl font-light text-black mb-20'>Don’t worry, our AI is friendly, and we totally respect your privacy! Pidge only tracks what you allow, when you allow it. </div>
        <div className='text-xl text-violet-400 font-md'>Learn more <ArrowForwardIcon /> </div>
      </div>
      <div className='relative w-1/4'>
        <div className='absolute left-40 top-16 bg-slate-50 rounded-lg shadow-xl w-auto p-2'>
          <Image
            src={Android}
            width={42}
            height={42}
            alt="android logo"
          />
        </div>
        <div className='absolute top-20 left-12 bg-slate-50 rounded-lg shadow-xl w-auto p-2' >  <Image
          src={Apple}
          width={82}
          height={82}
          alt="apple logo"
        /></div>
        <div className=' absolute left-40 top-40 bg-slate-50 rounded-lg shadow-xl w-auto p-2'>  <Image
          src={Chrome}
          width={72}
          height={72}
          alt="chrome logo"
        /></div>
        <div className='absolute left-16 top-48 bg-slate-50 rounded-lg shadow-xl w-auto p-2'>  <Image
          src={Windows}
          width={56}
          height={56}
          alt="windows logo"
        /></div>
      </div>
      <div className='w-1/4 mt-12'><Image
          src={Brain}
          width={200}
          height={200}
          alt="windows logo"
        /></div>
      <div className='w-2/5'><Image className='rounded-lg shadow-2xl'
          src={Urlshot}
          width={465}
          height={300}
          alt="Dynamic Url screenshot"
        /></div>
    </div>
  )
}
