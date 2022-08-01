import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; // copany Profile Icons
import PersonIcon from '@mui/icons-material/Person'; // Driver Icon
import TextSnippetIcon from '@mui/icons-material/TextSnippet'; // Documents Icon


import ModeNightIcon from '@mui/icons-material/ModeNight'; // Dark Mode Icon
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const LeftBox = styled(Box)`

`

const Leftbar = ({ currentMode , setMode }) => {
  return (
    <>

        <LeftBox flex={1} bgcolor={currentMode === "light" ? "#1976d2b0" : "Black"} p={2} sx={{ display: {xs: "none" , sm:"block"} , height: "100vh"}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/"> 
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/driver" >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Drivers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/document">
              <ListItemIcon>
                <TextSnippetIcon />
              </ListItemIcon>
              <ListItemText primary="Documents" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon  />
              </ListItemIcon>
              <Switch size="small" color="default" onChange={e => setMode(currentMode === "light"?  "dark" : "light" )} />
            </ListItemButton>
          </ListItem>

          
          </List>
        </LeftBox>
    </>
  )
}




export default Leftbar