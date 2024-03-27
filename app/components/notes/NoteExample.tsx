import React from 'react'
import IconLabelButtons from './NoteAttachBtns'
import NoteChips from './NoteChips'

export default function NoteExample() {
  return (
    <div className='flex flex-col bg-white shadow-xl rounded-md p-2 w-[250px] h-[230px] gap-y-1 border-2 border-slate-200'>
  <div className='  font-semibold text-sm text-black '>How to process the..</div>
  <div className=' text-sm font-light mt-2 text-black '> This can be a tedious process to deal with but if you follow the tips in this note,
  you’ll be a pro!</div>
  <div className='  mt-3'>
    <IconLabelButtons />
  </div>
  <div className='  mt-3'>
    <NoteChips />
  </div>
  <div className='flex text-sm row-start-5 mt-5 text-slate-300'>
    3/23/2024
  </div>
</div>

  )
}
