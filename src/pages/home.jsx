import { Box, Button, Typography } from '@mui/material'
import React from 'react'


function Home() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/uom.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          height: '100%',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#012970',
          }}
        >
          University Entrance Identity System
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            backgroundColor: '#012970',
            marginBottom: '30px',
            textTransform: 'none'
          }}
        >
          Device Setup
        </Button>
      </Box>
    </Box>
  )
}

export default Home