import React from 'react'
import { Typography } from '@mui/material'
import Advantage from '../Advantage/Advantage';
import './features.css';




export default function Features() {
  return (
    <div>
      <Typography
        variant="h4"
        mt="50px"
        justifyContent="center"
        alignItems="center"
        display="flex"
        textAlign="center"
      >
        Save time and write with confidence
      </Typography>
      <div className="btnSingUp">
        <button className="signUp-button btn btn-success">
          Upgrade to Quillbot Premium
        </button>
      </div>
      <Advantage/>
      
    </div>
  )
}
