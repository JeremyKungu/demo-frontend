import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";





function JobsCard({job, handleDeletion, id}){
    return(
    <div>
        <div class="card text-center">
    
    <div class="card-body">
      <h5 class="card-title">JOB TITLE : {job.title} </h5>
      <a href="#" class="link-primary">{job.location}</a>
      <p class="card-text">ORGANIZATION : {job.organization}</p>
      

     <Link to={`/job:apply`}>
     <button type="button" class="btn btn-info">APPLY</button>
     </Link>
      <Stack dir="rtl" spacing={20} >
      <Button  color="error" onClick={() => handleDeletion(id)}>
          DELETE
        </Button>
      </Stack>
    </div>
  </div>
    </div>
         
    )
}

 export default JobsCard;