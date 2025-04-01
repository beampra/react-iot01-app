import React from 'react'
import { Box, Typography, Button, Avatar, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
export default function CalculateNumber() {
  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
        <Avatar src={'https://cdn-icons-png.flaticon.com/512/10355/10355707.png'} sx={{ width: 150, height: 150, mx: 'auto' }}></Avatar>
        <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>เครื่องคิดเลข</Typography>
        <Typography sx={{ mt: 2 }}>ตัวเลขตัวที่ 1</Typography>
        <TextField variant='outlined' fullWidth type='number' />
        <Typography sx={{ mt: 2 }}>ตัวเลขตัวที่ 2</Typography>
        <TextField variant='outlined' fullWidth type='number' />
        <Typography sx={{ mt: 2 }}>เลือกเครื่องหมายคำนวณ</Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel></InputLabel>
          <Select defaultValue={'+'}>
            <MenuItem value='+'>+ บวก</MenuItem>
            <MenuItem value='-'>- ลบ</MenuItem>
            <MenuItem value='x'>x คูณ</MenuItem>
            <MenuItem value='÷'>÷ หาร</MenuItem>
          </Select>
        </FormControl>
        <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: 'rgb(0, 212, 184)', height: 50, color: 'rgb(99, 6, 186)' }} >
          <Typography sx={{ textAlign: 'center' }}>
            คำนวณ
          </Typography>
        </Button>
        <Typography sx={{ textAlign: 'center', mt: 4, color: 'red', fontSize: 100 }}>
          0.00
        </Typography>
      </Box>
    </Box>
  )
}
