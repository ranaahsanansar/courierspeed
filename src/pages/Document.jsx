import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Container, Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MainContainer = styled.div`
    max-width: 85vw;
    overflow: scroll;
`

const TitleContainer = styled.div`
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
`
const Title = styled.h1`
    color: #1976d2b0;
`

const Document = () => {
    return (
        <>
            <Container>

                <TitleContainer>
                    <Title>Documents</Title>
                    <Button variant="contained" startIcon={ <AddCircleOutlineIcon /> } >Add Doc</Button>
                </TitleContainer>

                <MainContainer>
                    <TableContainer component={Paper}>

                        <Table  >
                            <TableHead sx={{ bgcolor: "#1976d2b0", border: "1px solid black" }}>
                                <TableRow  >
                                    <TableCell >Document Name</TableCell>
                                    <TableCell >Uploaded</TableCell>
                                    <TableCell >Expiry</TableCell>
                                    <TableCell >Status</TableCell>
                                    <TableCell >Action </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ border: "1px solid #1976d2b0" }}>

                                <TableRow >
                                    <TableCell >Ahsan</TableCell>
                                    <TableCell >03/12/1999</TableCell>
                                    <TableCell >Not Define</TableCell>
                                    <TableCell >Completed</TableCell>
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
                                    <TableCell >03/12/1999</TableCell>
                                    <TableCell >Not Define</TableCell>
                                    <TableCell >Completed</TableCell>
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
                                    <TableCell >03/12/1999</TableCell>
                                    <TableCell >Not Define</TableCell>
                                    <TableCell >Completed</TableCell>
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
                                    <TableCell >03/12/1999</TableCell>
                                    <TableCell >Not Define</TableCell>
                                    <TableCell >Completed</TableCell>
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

export default Document