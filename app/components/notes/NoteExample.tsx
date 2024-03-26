import React from 'react'
import IconLabelButtons from './NoteAttachBtns'
import NoteChips from './NoteChips'

export default function NoteExample() {
  return (
    <div className='grid grid-cols-1 grid-rows-5 bg-slate-200 rounded-md'>
      <div className='row-start-1 col-span-1 bg-red-600 h-8'>How to process the..</div>
      <div className='row-start-2 bg-red-950'>This can be a tedious process to deal with 
      but if you follow the tips in this note, you’ll be a pro!</div>
      <div className='row-start-3 mt-6 bg-lime-800 h-10'>
        <IconLabelButtons />
      </div>
      <div className='row-start-4 bg-orange-300 h-10'>
        <NoteChips />
      </div>
      <div className='flex row-start-5 bg-green-400'>

      </div>
    </div>
  )
}
