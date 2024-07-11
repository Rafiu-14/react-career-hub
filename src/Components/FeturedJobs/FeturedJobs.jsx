import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {

    const [jobs, setJobs] = useState([])
    
    const [datalength, setdatalength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className="mt-20">
            <h1 className="text-center text-5xl font-bold text-black">Featured Job: {jobs.length}</h1>
            <p className="text-[#757575] text-center mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-10 mt-10 mx-40">
                {
                    jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>


            <div className={datalength === jobs.length && 'hidden'}>
                <button 
                onClick={()=>setdatalength(jobs.length)}
                className="btn mx-96 mt-20 bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-bold">Show More</button>
            </div>

        </div>
    );
};

export default FeturedJobs;