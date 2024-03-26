import React from 'react'

export default function ContentContainerThree() {
  return (
    <div className='grid grid-cols-4 grid-rows-3 grid-flow-col bg-fuchsia-500 h-[500px]'>
        <div className='col-start-1 row-start-1 bg-stone-50'>test</div>
        <div className='row-start-2 bg-neutral-500'>test</div>
        <div className='row-start-3 bg-amber-500'>test</div>
        <>
            <div className=' bg-stone-400 col-start-2 row-span-3'>test</div>
            <div className=' bg-stone-200 col-start-3 row-span-3'>test</div>
            <div className=' bg-stone-600 col-start-4 row-span-3'>test</div>
        </>
    </div>
  )
}
