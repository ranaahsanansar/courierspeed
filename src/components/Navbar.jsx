import { AppBar, Avatar, Box, Grid, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/system';
import { mobile } from './../responsive';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from '@mui/material';



// NavBar Logo 
const Logo = styled(Typography)`
    display: block;
    color: #2c7be5;
    /* Responsive for Mobile Screen  */
    ${mobile({ 
    display: "none"
})}
`
// Small Logo 
const ShortLogo = styled(Typography)`
    display: none;
    /* Responsive for Mobile Screen  */
     ${mobile({
    display: "block"
})}
`

const Logout = styled(Button)`
    color: black;
    align-items: center;
    padding: 0;
    margin-left: 2px;
`

// -------------------------------------------------------------------------
// Functions ---------------------------------------------------------------
// -------------------------------------------------------------------------

const handleLogout = () => {
    console.log("LogOut");
}

const handleClose = () => {
    console.log("CLose")
}


const Navbar = () => {

    const [open , setOpen] = useState(false)
    

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

                        <IconButton size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Logo variant='h6' component="h6" >Courier Speed</Logo>
                        <ShortLogo variant='h6' component="h6" >CS</ShortLogo>
                        <Avatar sx={{ border: "1px solid white" }} width="30px" height="30px" src='https://iconarchive.com/download/i18310/iconshock/cms/user.ico' onClick={ e => setOpen(true)} />

                    </Toolbar>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={ e => setOpen(false)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar