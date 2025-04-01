import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'

export default function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://cdn-icons-png.flaticon.com/512/10355/10355707.png'} sx={{ width: 150, height: 150, mx: 'auto' }}></Avatar>
          <Typography variant='h3' sx={{ textAlign: 'center', mt: 2 }}>IoT Calculate by Nontakorn SAU</Typography>
        </Box>
      </Box>
    </>
  )
}
