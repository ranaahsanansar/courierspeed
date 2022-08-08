import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import Leftbar from './components/Leftbar';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import Footer from './components/Footer';
import { amber, deepOrange, grey } from '@mui/material/colors';

const MainLayout = () => {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode,
      ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {main: '#edf2f9'} ,
          divider: '#edf2f9',
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {main: '#fff'},
          divider: '#0b1727',
          background: {
            default: '#0b1727',
            paper: '#0b1727',
          },
          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
    }
  });


  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="#edf2f9" color={"text.primary"} >
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