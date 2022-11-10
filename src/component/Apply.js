import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Apply(){

    const [firstN, setfirstN] = useState('');
    const [secondn, setsecondn] = useState('');
    const [email, setemail] = useState('');
    const [newcv, setcv] = useState('');

    function handlePost(e){
      e.preventDefault();
      alert("You will recieve an email upon job approval")
      setfirstN('');
      setsecondn('');
      setcv('');
      setemail('')
    }


  const linkStyle = {
    margin: "12rem",
    textDecoration: "none",
    color: 'red',
    position: 'relative',
    
    
  
  };

    return(
    <div>
           <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 12, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="FirstName"
        onChange={(e) => setfirstN(e.target.value)}
        value = {firstN}

      />
      <TextField
        id="outlined-uncontrolled"
        label="SecondName"
        onChange={(e) => setsecondn(e.target.value)}
        value = {secondn}
      />
       <TextField
        id="outlined-uncontrolled"
        label="Email"
        onChange={(e) => setemail(e.target.value)}
        value = {email}
      />
       <TextField
        id="outlined-uncontrolled"
        label="UploadCv"
        onChange={(e) => setcv(e.target.value)}
        value = {newcv}
      />

   <Stack direction="row" spacing={5}>
    <Button variant="contained" onClick={handlePost} >
        Submit
      </Button>
    </Stack>

    <Link  style={linkStyle} to = {'/job'}> <Stack direction="row" spacing={2}>
        GO BACK TO THE JOBS SECTION
      </Stack></Link>
     
    </Box>
    </div>
         
    )
}

 export default Apply;