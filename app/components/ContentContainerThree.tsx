import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContentContainerThree() {
  return (
    <div className='flex mb-4 h-[400px] gap-4'>
        <div className='w-1/2 bg-red-400'>
          <div className='text-3xl'>AI tracking allows Pidge to find where your working, and what your working on.</div>
          <div className='text-xl font-light'>Don’t worry, our AI is friendly, and we totally respect your privacy! Pidge only tracks what you allow, when you allow it. </div>
          <div className='text-xl text-violet-400 font-md'>Learn more <ArrowForwardIcon/> </div>
        </div>
        <div className='w-1/4 bg-red-400 '>test</div>
        <div className='w-1/4 bg-red-400'>test</div>
        <div className='w-1/4 bg-red-400'>test</div>
    </div>
  )
}
