import React from 'react'
import IconLabelButtons from './NoteAttachBtns'
import NoteChips from './NoteChips'

export default function NoteExample() {
  return (
    <div className='flex flex-col bg-gradient-to-r from-white shadow-xl rounded-md p-3 border-2 border-slate-200 shrink w-[250px] h-[270px]'>
      <div className='font-semibold text-sm text-black'>How to process the..</div>
      <div className='text-sm font-light mt-2 text-black'>This can be a tedious process to deal with but if you follow the tips in this note,
        you’ll be a pro!</div>
      <div className='mt-8'>
        <IconLabelButtons />
      </div>
      <div className='mt-6'>
        <NoteChips />
      </div>
      <div className='flex gap-1/2 row-start-5 justify-between mt-10'>
        <div className='text-slate-300 text-sm'>
          3/23/2024
        </div>
        <div className='text-slate-300 text-sm'>
          3:48 PM
        </div>
      </div>
    </div>
  )
}
