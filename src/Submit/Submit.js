import { Box } from '@mui/material';
import React, { useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Register from '../Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { submit } from '../Features/Reducer';
import { useNavigate } from 'react-router-dom';



const Submits = () => {

     const [FirstName,setFirstName] = useState('');
     const [LastName,setLastName] = useState('');
     const [Password,setPassword] = useState('');
     const [Email,setEmail] = useState('');

     const dispatch = useDispatch();
     const navigate = useNavigate();

     const handleEvent = () => {
      // Create an object with the data you want to pass
      const userData = {
        FirstName,
        LastName,
        Password,
        Email,
      };

      // Dispatch the submit action with the user data
      dispatch(submit(userData));
          navigate('/table')
   };

   
  return (
    <Box
    sx={{
      boxShadow: 2,
      width: '20vw',
      height: "30vh",
      margin: '100px auto', // Center horizontally
      display: 'flex',
      flexDirection: 'column', // Stack children vertically
      alignItems: 'center', // Center children horizontally
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField value={FirstName} onChange={(e)=>setFirstName(e.target.value)}  sx={{marginTop:'10px'}} id="input-with-sx" label="FirstName" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField value={LastName} onChange={(e)=>setLastName(e.target.value)} sx={{marginTop:'10px'}} id="input-with-sx" label="LastName" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField value = {Password} onChange={(e)=>setPassword(e.target.value)}  sx={{marginTop:'10px'}} id="input-with-sx" label="Password" variant="standard" />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField value = {Email} onChange={(e)=>setEmail(e.target.value)}  sx={{marginTop:'10px'}} id="input-with-sx" label="Email" variant="standard" />
    </Box>
     
    <Box>
      <Button onClick={handleEvent} variant="contained">
        Submit
      </Button>
    </Box>
  </Box>
);
}

export default Submits