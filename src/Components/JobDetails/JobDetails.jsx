import { useLoaderData, useParams } from "react-router-dom";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("Successfully added to Apply Jobs section");
    }
    return (
        <div className="mx-10">
            <h1 className="text-3xl text-center mt-10 font-bold underline">Job Details Of <span className="uppercase">{job.job_title}</span></h1>
            <div className="grid mt-5 gap-4 md:grid-cols-4">
                <div className=" space-y-5 md:col-span-3">
                    <h2 className="text-[#757575]"><span className="text-black font-bold">Job Description:</span> <br /> {job.job_description}</h2>
                    <h2 className="text-[#757575]"><span className="text-black font-bold">Job Responsibility:</span> <br /> {job.job_responsibility}</h2>
                    <h2 className="text-[#757575]"><span className="text-black font-bold">Educational Requirements: </span><br /> {job.educational_requirements}</h2>
                    <h2 className="text-[#757575]"><span className="text-black font-bold">Experiences:</span> <br /> {job.experiences}</h2>
                </div>

                <div className=" p-3 bg-[#7e90fe1a] rounded-md space-y-2">
                    <h2 className="text-xl font-bold">Job Details</h2> <hr />
                    <div>
                        <h2 className="flex gap-1"><HiCurrencyBangladeshi className="mt-1 text-[#7e90fe]" /> <span className="font-bold">Salary : </span> {job.salary}</h2>
                        <h2 className="flex gap-1"><PiBagSimpleFill className="mt-1 text-[#7e90fe]" /> <span className="font-bold">JobTitle: </span> {job.job_title}</h2>
                    </div>
                    <h2 className="text-xl font-bold">Contact</h2> <hr />
                    <div>
                        <h2 className="flex gap-1"><FaPhone className="mt-1  text-[#7e90fe]" /><span className="font-bold">
                        Phone:</span>{job.contact_information.phone}</h2>
                        <h2 className="flex gap-1"><IoMdMail className="mt-1 text-[#7e90fe]" /><span className="font-bold">Email:</span> {job.contact_information.email}</h2>
                        <h2 className="flex gap-1"><FaLocationDot className="mt-1 text-[#7e90fe]" />
                        <span className="font-bold">Address:</span> {job.contact_information.address}</h2>
                        <div className=""> 
                        <button onClick={handleApplyJob} className="btn bg-gradient-to-r from-[#7e90fe] to-[#9873ff] text-white font-bold w-full mt-5">Apply Now!</button>
                        </div>  
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;