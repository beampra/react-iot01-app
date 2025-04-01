import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://cdn-icons-png.flaticon.com/512/10355/10355707.png'} sx={{ width: 150, height: 150, mx: 'auto' }}></Avatar>
          <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>IoT Calculate by Nontakorn SAU</Typography>
          <Link to={'/calnum'}>
            <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: 'rgb(212, 0, 71)' }} >
              <Typography variant='h6' sx={{ textAlign: 'center' }}>
                Go to Calculate Number
              </Typography>
            </Button>
          </Link>
          <Button component={Link} to={'/calmoneyshare'} fullWidth variant='contained' sx={{ mt: 2, backgroundColor: 'rgb(0, 212, 184)' }} >
            <Typography variant='h6' sx={{ textAlign: 'center' }}>
              Go to Calculate MoneyShare
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}
