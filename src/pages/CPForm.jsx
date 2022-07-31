// Company Profile Forum 

import { Box, Container, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Button } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Next Icon

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Back Icon

const ContactDetailsDiv = styled.div`
    display: ${props => props.num === 0 ? "block" : "none"} ;
`

const TradingDetailsDiv = styled.div`
    display: ${props => props.num === 1 ? "block" : "none"} ;
`

const SpecialistServicesDiv = styled.div`
    display: ${props => props.num === 2 ? "block" : "none"} ;
`

const BillingAddressDiv = styled.div`
    display: ${props => props.num === 3 ? "block" : "none"} ;
`

const AboutDiv = styled.div`
    display: ${props => props.num === 4 ? "block" : "none"} ;
`

const SubmitDiv = styled.div`
    display: ${props => props.num === 5 ? "block" : "none"} ;
`


const CPForm = () => {

    const [formNo, setFormNo] = useState(5);

    const handleBack = () =>{

    }

    const handleNext =() =>{

    }

    const steps = [
        'Contact Details'
        ,
        'Trading Details'
        ,
        'Specialist Service',
        ,
        'Billing Address',
        ,
        'About',
        ,
        'Submit',
      ];

    return (
        <>
            <Box sx={{ width: '100%' }}>
      <Stepper activeStep={formNo} alternativeLabel sx={{display: "flex", flexWrap: "wrap"}}>
        {steps.map((formNo) => (
          <Step key={formNo}>
            <StepLabel>{formNo}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
            <Box component="form" >
                <Box>
                    <ContactDetailsDiv num={formNo} >
                        <h1>Ahsan</h1>
                    </ContactDetailsDiv>

                    <TradingDetailsDiv num={formNo} >
                        <h1>Trading Details</h1>
                    </TradingDetailsDiv>

                    <SpecialistServicesDiv num={formNo} >
                        <h1>Special Services </h1>
                    </SpecialistServicesDiv>

                    <BillingAddressDiv num={formNo} >
                        <h1>Billing Address</h1>
                    </BillingAddressDiv>

                    <AboutDiv num={formNo} >
                        <h1>About</h1>
                    </AboutDiv>

                    <SubmitDiv num={formNo} >
                        <h1>Submit</h1>
                    </SubmitDiv>
                </Box>

                <Box sx={{ marginBottom: "10px" , marginTop: "10px",  justifyContent: "space-between" , display: "flex" }}>

                <Button variant="contained"
                onClick={handleBack} startIcon={<ArrowBackIosIcon />}>
                        Back
                    </Button>

                    <Button variant="contained" onClick={handleNext} endIcon={<NavigateNextIcon />}>
                        Next
                    </Button>
                </Box>


            </Box>
        </>
    )
}

export default CPForm