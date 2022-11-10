import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function Recruiter(){

    const [newJob, setJob] = useState('');
    const [newOrganization, setOrganization] = useState('');
    const [newUrl, setUrl] = useState('');

    function handlePost(e){
      e.preventDefault();
      alert("Your Post will Reflect on the JOBS Section")
      fetch("http://localhost:9292/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "title" : `${newJob}`,
          "location": `${newUrl}`,
          "organization": `${newOrganization}`,
        }),
      })

      setJob('');
      setOrganization('');
      setUrl('');
    }

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
        label="Job Title"
        onChange={(e) => setJob(e.target.value)}
        value = {newJob}

      />
      <TextField
        id="outlined-uncontrolled"
        label="Organization"
        onChange={(e) => setOrganization(e.target.value)}
        value = {newOrganization}
      />
       <TextField
        id="outlined-uncontrolled"
        label="URL of your site"
        onChange={(e) => setUrl(e.target.value)}
        value = {newUrl}
      />

<Stack direction="row" spacing={5}>
    <Button variant="contained" onClick={handlePost} >
        Post your Job on our website
      </Button>
    </Stack>
     
    </Box>
    </div>
         
    )
}

 export default Recruiter;