// This home page is for Company Profile 

import { Card, Container } from '@mui/material'
import React from 'react'
import CPForm from './CPForm'

const Home = () => {
  return (
    <Container>
      <Card>
        <Container>
          <CPForm />
        </Container>
      </Card>
    </Container>
  )
}

export default Home