import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localstorage";
import { MdLocationOn } from "react-icons/md";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [AppliedJobs, setAppliedJobs] = useState([]);
    useEffect(()=>{
        const storedJobsId = getStoredJobApplication()
        if(jobs.length > 0){
            // const jobsAppiled = jobs.filter(job =>)
            const jobsAppiled = [];
            for(const id of storedJobsId){
                const job = jobs.find(job => job.id === id )
                if(job){
                    jobsAppiled.push(job)
                }
            }
            setAppliedJobs(jobsAppiled);
            // console.log(jobs, storedJobsId, jobsAppiled)    
        }
    },[])
    return (
        <div className="mx-20">
            <h2 className="text-3xl font-bold uppercase text-center mt-10 underline">{AppliedJobs.length} Jobs you have applied</h2>
            {
                AppliedJobs.map(job => <div key={job.id} className="border p-5 mt-5 ">
                    <div  className="flex">
                        <div className="mr-2">
                            <img src={job.logo} className="bg-gray-200 p-12 w-60 max-h-60 rounded-md" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="card-title font-bold text-2xl text-[#474747]">{job.job_title}</h2>
                            <p className="text-[#757575] text-lg font-semibold">{job.company_name}</p>
                            <div className="space-x-2">
                                <button className="border border-1px border-[#9873ff] px-5 py-2 rounded-md bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block text-transparent bg-clip-text font-bold ">{job.remote_or_onsite}</button>
                                <button className="border border-1px border-[#9873ff] px-5 py-2 rounded-md bg-gradient-to-r from-[#7e90fe] to-[#9873ff] inline-block text-transparent bg-clip-text font-bold ">{job.job_type}</button>
                            </div>
                            <div className="flex text-[#757575] font-semibold">
                                <p className="flex items-center justify-center gap-1"><MdLocationOn />Location: {job.location}</p>
                                <p className="flex items-center justify-center gap-1"><HiCurrencyBangladeshi /> Salary: {job.salary}</p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="mt-auto mb-auto ml-auto mr-5">
                            <Link to={`/job/${job.id}`}>
                                <button className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-bold">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }

            <div>
                
            </div>
        </div>
    );
};

export default AppliedJobs;