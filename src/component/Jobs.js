import React, { useEffect, useState } from "react";
import JobsCard from "./JobsCard";





function Job(){
    
    const [job , setJob] = useState([])

    useEffect(() => {
      fetch("http://localhost:9292/jobs")
      .then((resp) => resp.json())
      .then((job) => setJob(job));
    }, []);

    function handleDeletion(id){
      setJob(job.filter(jobs => jobs.id !== id))
      fetch(`http://localhost:9292/jobs/${id}`, {
        method: "DELETE",
      })
    }

     
    

    return(
    <div>
        {job.map(jobs => <JobsCard key = {jobs.id} id = {jobs.id} job={jobs} handleDeletion={handleDeletion}/>)}

    </div>
         
    )
}

 export default Job;