import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
import { mobile } from './../responsive';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// NavBar Logo 
const Logo = styled(Typography)`
    display: block;
    ${mobile({
    display: "none"
})}
`
// Small Logo 
const ShortLogo = styled(Typography)`
    display: none;
     ${mobile({
    display: "block"
})}
`



const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar style={{display: "flex" , justifyContent: "space-between"}}>
                        
                            <IconButton size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Logo variant='h6' component="h6" >Courier Speed</Logo>
                            <ShortLogo variant='h6' component="h6" >CS</ShortLogo>
                            <AccountCircleOutlinedIcon />
                        
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar