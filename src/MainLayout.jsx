import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import Leftbar from './components/Leftbar';
import { Box, Stack } from '@mui/material';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Leftbar />
          <Box flex={4} p={2}>
            <Outlet />
          </Box>
        </Stack>
        
    </>

  )
}

export default MainLayout