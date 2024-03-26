import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function NavMenu() {
  return (
    <div className='grid grid-cols-9 grid-rows-1 mt-10'>
        <Button className=' col-start-2' size='small'  >Product</Button>
        <Button className=''  size='small'>Features</Button>
        <Button className='' size='small'>Pricing</Button>
        <Button className='' size='small'>Resources</Button>
        <Button className=' col-start-8' size='small'>Try it out</Button>
        <Button className='' size='small'>Login</Button>
    </div>
  )
}
