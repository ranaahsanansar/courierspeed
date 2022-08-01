import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import Leftbar from './components/Leftbar';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import Footer from './components/Footer';

const MainLayout = () => {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  });


  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.defult"} color={"text.primary"} >
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Leftbar setMode={setMode} currentMode={mode} />
          <Box flex={4} p={2}>
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
    <Footer />
        
    </>

  )
}

export default MainLayout