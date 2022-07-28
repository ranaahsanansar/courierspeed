import React from 'react'
import { Box } from '@mui/material';

const Leftbar = () => {
  return (
    <>
        <Box flex={1} bgcolor="blue" p={2} sx={{ display: {xs: "none" , sm:"block"}}}>
          <h1>Ahsan</h1>
        </Box>
    </>
  )
}

export default Leftbar