'use client'

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { VariantProp } from '@mui/joy/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export default function ContactForm() {
  const [variant, setVariant] = React.useState<VariantProp>('outlined');

  const theme = createTheme({
    palette: {
      primary: purple,
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className='flex-col'>
        <div className='text-center text-black text-6xl font-medium mb-10'>Document faster. Learn Faster. </div>
        <div className='text-center text-xl text-black mb-20'> We’re here to help, try Pidge Pro on us!</div>
      </div>
      <div className='grid grid-cols-6 gap-12 mb-20'>
        <TextField className='col-start-3 col-span-2' id="outlined-basic" label="Email Address" variant="outlined" />
        <Button className='self-center w-40 col-start-5' variant={variant} color="primary">
          Try for free
        </Button>
      </div>
    </ThemeProvider>
  )
}
