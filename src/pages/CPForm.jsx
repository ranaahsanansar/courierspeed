// Company Profile Forum 

import { Box, Checkbox, Container, FormControlLabel, FormGroup, Select, Step, StepLabel, Stepper, TextareaAutosize } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Button } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Next Icon

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Back Icon
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';

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

const InnerFormBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const TitleBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
 `

const Title = styled.h1`
    
`

const InputBox = styled(Box)`
    margin: 5px 5px;
    
`



const CPForm = () => {


    const [formNo, setFormNo] = useState(0);

    const handleBack = () => {
        if (formNo <= 5 && formNo > 0) {
            setFormNo(formNo - 1);

        } else if (formNo === 0) {

        }
    }

    const handleNext = () => {
        if (formNo < 5) {
            setFormNo(formNo + 1);
        } else if (formNo === 5) {
        }
    }


    // ---------------------------

    const [payment, setPayment] = useState(14);

    const selectPayment = (event) => {
        setPayment(event.target.value);
    }

    // ---------------------------


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
                <Stepper activeStep={formNo} alternativeLabel sx={{ display: "flex", flexWrap: "wrap" }}>
                    {steps.map((formNo) => (
                        <Step key={formNo}>
                            <StepLabel>{formNo}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

            </Box>
            <hr />
            <Box component="form" >
                <Box sx={{ marginTop: "5px" }}>
                    <ContactDetailsDiv num={formNo} >
                        <TitleBox>
                            <Title>Ahsan</Title>
                        </TitleBox>

                        <InnerFormBox >

                            <InputBox >
                                <TextField
                                    required
                                    id="main-contact"
                                    label="Main Contact"

                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="Country"
                                    label="Required"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField

                                    id="your-country"
                                    label="Your Country"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="time-zone"
                                    label="Time Zone"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="address"
                                    label="Address"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    id="address2"
                                    label="Address2"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="city"
                                    label="Town/City"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="post-code"
                                    label="Post Code"
                                    type="number"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="phone"
                                    label="Phone"
                                    type="number"
                                    name="phone"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="phone2"
                                    label="Phone2"
                                    type="number"
                                    name="phone2"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="fax"
                                    label="Fax"
                                    name="fax"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="email"
                                    label="Email"
                                    type="email"
                                    name="email"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="home"
                                    label="Home Location"

                                    name="home"
                                />
                            </InputBox>

                            <InputBox>
                                <TextField
                                    required
                                    id="Dlocation"
                                    label="Directory Location"

                                    name="d-location"
                                />
                            </InputBox>


                        </InnerFormBox>

                    </ContactDetailsDiv>

                    {/* ------------------------------------- */}

                    <TradingDetailsDiv num={formNo} >

                        <TitleBox>
                            <Title>Trading Details</Title>
                        </TitleBox>
                        <InnerFormBox >


                            {/* Vat Number  */}
                            <InputBox >
                                <TextField
                                    id="vat-number"
                                    label="Vat Number"

                                />
                            </InputBox>
                            {/* Business Name  */}
                            <InputBox >
                                <TextField
                                    required
                                    id="business-name"
                                    label="Business Name"

                                />
                            </InputBox>
                            {/* Trading as  */}
                            <InputBox >
                                <TextField

                                    id="trading-as"
                                    label="Trading as"

                                />
                            </InputBox>
                            {/* Company Registration  */}
                            <InputBox >
                                <TextField
                                    required
                                    id="reg-num"
                                    label="Company Reg Number"
                                    type="number"
                                />
                            </InputBox>
                            {/* Opeator's Licence  */}
                            <InputBox >
                                <TextField
                                    id="operator-licence"
                                    label="Operator Licence"

                                />
                            </InputBox>
                            {/* payment Terms Select  */}
                            <InputBox >
                                <label style={{ margin: "5px" }}>Payment</label>
                                <Select

                                    id="payment"
                                    value={payment}
                                    label="Payment"
                                    onChange={selectPayment}


                                >
                                    <MenuItem value={14}>14 Days</MenuItem>
                                    <MenuItem value={30}>30 Days</MenuItem>
                                </Select>
                            </InputBox>


                        </InnerFormBox>

                    </TradingDetailsDiv>

                    {/* -------------------------------------- */}

                    <SpecialistServicesDiv num={formNo} >
                        <TitleBox>
                            <Title>Special Services </Title>
                        </TitleBox>
                        <InnerFormBox  >
                            <FormGroup>

                                <FormControlLabel control={<Checkbox name="chilled" />} label="Chilled" />

                                <FormControlLabel control={<Checkbox name="cargo" />} label="Cargo Operative" />

                                <FormControlLabel control={<Checkbox name="high-security" />} label="High Security" />

                                <FormControlLabel control={<Checkbox name="frozen" />} label="Frozen" />

                                <FormControlLabel control={<Checkbox name="fors-gold" />} label="FORS Gold" />

                                <FormControlLabel control={<Checkbox name="fors-silver" />} label="FORS Silver" />

                                <FormControlLabel control={<Checkbox name="fors-qualified" />} label="FORS Qualified" />

                                <FormControlLabel control={<Checkbox name="hour-24" />} label="24 Hour" />

                                <FormControlLabel control={<Checkbox name="man-2" />} label="2 Man" />

                                <FormControlLabel control={<Checkbox name="other" />} label="Other" />


                            </FormGroup>
                        </InnerFormBox>

                    </SpecialistServicesDiv>

                    {/* ------------------------------------------ */}

                    <BillingAddressDiv num={formNo} >

                        <TitleBox>
                            <Title>Billing Address</Title>
                        </TitleBox>

                        <InnerFormBox  >
                            {/* Address 1 */}
                            <InputBox>
                                <TextField
                                    required
                                    id="billing-address1"
                                    label="Address"

                                />
                            </InputBox>

                            {/* Address2  */}
                            <InputBox>
                                <TextField
                                    id="billing-address2"
                                    label="Address2t"

                                />
                            </InputBox>


                            {/* Town  */}
                            <InputBox>
                                <TextField
                                    required
                                    id="billing-town"
                                    label="Town"

                                />
                            </InputBox>

                            {/* Post Code  */}

                            <InputBox>
                                <TextField
                                    required
                                    id="billing-postcode"
                                    label="Post Code"
                                    type="number"
                                />
                            </InputBox>


                            {/* Finance Email  */}

                            <InputBox>
                                <TextField
                                    required
                                    id="billing-email"
                                    label="Email"
                                    type="email"
                                />
                            </InputBox>


                        </InnerFormBox>

                    </BillingAddressDiv>
                    {/* -------------------------------------------- */}
                    <AboutDiv num={formNo} >


                        <TitleBox>
                            <Title>About</Title>
                        </TitleBox>

                        <InnerFormBox sx={{ flexDirection: "column"}} >

                            <InputBox sx={{width: "80%"}}>
                                <TextField
                                    required
                                    id="company-name"
                                    label="Company Name"
                                    helperText="Enter Your Company Name"
                                    fullWidth
                                />
                            </InputBox>

                            
                            <InputBox sx={{width: "80%"}}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Enter About"
                                />
                            </InputBox>



                        </InnerFormBox>

                    </AboutDiv>

                    <SubmitDiv num={formNo} >

                        <TitleBox>
                            <Title>Submit</Title>
                        </TitleBox>
                        <InnerFormBox  >
                            <Button>Submit</Button>
                        </InnerFormBox>

                    </SubmitDiv>
                </Box>

                <Box sx={{ marginBottom: "10px", marginTop: "10px", justifyContent: "space-between", display: "flex" }}>

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