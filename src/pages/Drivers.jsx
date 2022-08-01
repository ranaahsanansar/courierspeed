import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Container, Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MainContainer = styled.div`
    max-width: 85vw;
    overflow-x: scroll;
`

const TitleContainer = styled.div`
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
    color: #1976d2b0;
`

const Drivers = () => {
    return (
        <>
            <Container>

                <TitleContainer>
                    <Title>Drivers</Title>
                    <Button variant="contained" startIcon={ <AddCircleOutlineIcon /> } >Add Driver</Button>
                </TitleContainer>

                <MainContainer>
                    <TableContainer component={Paper}>

                        <Table  >
                            <TableHead sx={{ bgcolor: "#1976d2b0", border: "1px solid black" }}>
                                <TableRow  >
                                    <TableCell >Driver Name</TableCell>
                                    <TableCell >Email</TableCell>
                                    <TableCell >Job Title</TableCell>
                                    <TableCell >Role</TableCell>
                                    <TableCell >Status</TableCell>
                                    <TableCell >Action </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ border: "1px solid #1976d2b0" }}>
                                <TableRow >
                                    <TableCell >Ahsan</TableCell>
                                    <TableCell >asn.cs21@gmail.com</TableCell>
                                    <TableCell >Blockchain Developer</TableCell>
                                    <TableCell >Developer</TableCell>
                                    <TableCell >Verified</TableCell>
                                    <TableCell >

                                        <IconButton color="primary" >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton >
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell >Ahsan</TableCell>
                                    <TableCell >asn.cs21@gmail.com</TableCell>
                                    <TableCell >Blockchain Developer</TableCell>
                                    <TableCell >Developer</TableCell>
                                    <TableCell >Verified</TableCell>
                                    <TableCell >

                                        <IconButton color="primary" >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton >
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell >Ahsan</TableCell>
                                    <TableCell >asn.cs21@gmail.com</TableCell>
                                    <TableCell >Blockchain Developer</TableCell>
                                    <TableCell >Developer</TableCell>
                                    <TableCell >Verified</TableCell>
                                    <TableCell >

                                        <IconButton color="primary" >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton >
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>

                                <TableRow >
                                    <TableCell >Ahsan</TableCell>
                                    <TableCell >asn.cs21@gmail.com</TableCell>
                                    <TableCell >Blockchain Developer</TableCell>
                                    <TableCell >Developer</TableCell>
                                    <TableCell >Verified</TableCell>
                                    <TableCell >

                                        <IconButton color="primary" >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton >
                                            <DeleteForeverIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>


                            </TableBody>
                        </Table>

                    </TableContainer>
                </MainContainer>
            </Container>



        </>
    )
}

export default Drivers