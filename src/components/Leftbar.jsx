import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; // copany Profile Icons
import PersonIcon from '@mui/icons-material/Person'; // Driver Icon
import TextSnippetIcon from '@mui/icons-material/TextSnippet'; // Documents Icon
import { styled } from '@mui/system';

import ModeNightIcon from '@mui/icons-material/ModeNight'; // Dark Mode Icon

const Leftbar = () => {
  return (
    <>
        <Box flex={1} bgcolor="#1976d2b0" p={2} sx={{ display: {xs: "none" , sm:"block"} , height: "100vh"}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Company Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Drivers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
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
              <Switch size="small" color="default"/>
            </ListItemButton>
          </ListItem>

          
          </List>
        </Box>
    </>
  )
}




export default Leftbar